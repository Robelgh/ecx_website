import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../../_service';
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
    private service: ServiceService,
    private masterIdGetter: MasterIdGetter
  ) {}

  isHome!: boolean;
  isService!: boolean;
  isDetail!: boolean;
  loading!: boolean;

  getResponse: any = {};
  params: any;
  data: any = {};
  PageCatagories: any = [];
  pages:any =[];
  parent: any = [];
  imagePath = this.service.getImagePath();

  aboutBanner: any = [];

  orderObj!: {};

  async ngOnInit() {
 
    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      this.isService = this.router.url === '/service';

     
      this.getResponse = await this.masterIdGetter.getParent('service');
      this.parent = this.getResponse[0];

      this.getResponse = await this.service.getAllPageCatagories(
        this.parent.id
      );
      this.PageCatagories = this.getResponse.data;

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.data = await this.PageCatagories.filter(
            (a: any) => a.title === params.get('detail')
          )[0];
          console.log(this.data)
          this.getResponse = await this.service.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.loading = false;
        }

      else  if (params.get('pages') != null || params.get('pages') != undefined) {
        console.log("trurrrrrrrrrrrrrrrrreeeeeeeeeeee")
          this.data = await this.pages.filter(
            (a: any) => a.title === params.get('pages')
          )[0];
          this.loading = false;
        }
         else {
          this.data = this.parent;
          this.loading = false;
        }
      });
    });
}
}
