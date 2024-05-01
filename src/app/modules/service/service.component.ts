import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GenericService } from '../../_service';
import { MasterIdGetter } from '../../_service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenericService,
    private masterIdGetter: MasterIdGetter
  ) {}

  isHome!: boolean;
  isService!: boolean;
  isDetail!: boolean;
  loading!: boolean;

  getResponse: any = {};
  params: any;
  data: any = {};
  splitStrings: any = [];
  PageCatagories: any = [];
  pages: any = [];
  parent: any = [];
  parentTitle: any = '';
  imagePath = this.service.getImagePath();

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.isHome = this.router.url == '/';

      
      switch (localStorage.getItem('lang')) {
        case "eng":
              this.getResponse = await this.masterIdGetter.getParent('service');
              this.parentTitle = 'service';
              break;
        case "አማ":
              this.getResponse = await this.masterIdGetter.getParent('ኣገልግሎት');
              this.parentTitle = 'ኣገልግሎት';
              break;
              default:
      }

      this.parent = this.getResponse[0];

      this.getResponse = await this.service.getAllPageCatagories(
        this.parent.id
      );
      this.PageCatagories = this.getResponse.data;

      console.log(this.PageCatagories)

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.data = await this.PageCatagories.filter(
            (a: any) => a.title === params.get('detail')
          )[0];
          this.getResponse = await this.service.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.loading = false;
        } else if (
          params.get('pages') != null ||
          params.get('pages') != undefined
        ) {
       
            this.splitStrings = params.get('pages')?.split(',');
            this.getResponse = await this.service.getAllPage(
              this.splitStrings[1]
            );
            this.pages = this.getResponse.data;
            this.data = await this.pages.filter(
              (a: any) => a.title === this.splitStrings[0]
            )[0];
          
        } else {
          this.data = this.parent;
          this.loading = false;
        }
      });
    });
  }
}
