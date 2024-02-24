import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { AboutService } from '../../_service';
import { MasterIdGetter } from '../../_service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AboutService,
    private masterIdGetter: MasterIdGetter
  ) {}

  isHome!: boolean;
  isAbout!: boolean;
  isDetail!: boolean;
  isBoardOfDirctories!: boolean;
  loading!: boolean;

  switcher: boolean = false;
  // isBoardOfDirctories!:booalean;
  parentId: any = [];
  getResponse: any = {};
  params: any;
  data: any = {};
  aboutus: any = [];
  parent: any = [];
  boardOfDirectories: any = [];
  imagePath = this.service.getImagePath();
  aboutBanner: any = [];

  orderObj!: {};

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      this.isAbout = this.router.url === '/about';

      // this.getResponse = await this.service.getParent();
      // console.log(this.getResponse)
      // this.aboutus = this.getResponse.data;

      this.getResponse = await this.masterIdGetter.getParent('about');
      this.parent = this.getResponse[0];

      this.getResponse = await this.service.getAllParentChild(this.parent.id);
      this.aboutus=this.getResponse.data;

      this.getResponse = await this.service.getBoardofDiroctories();
      this.boardOfDirectories = this.getResponse.data;

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          if (params.get('detail') === 'single detail') {
            const data = {
              title: params.get('name'),
              description: params.get('description'),
              imgName: params.get('imgName'),
            };

            this.data = await data;
            this.loading = false;
          } else {
            this.data = await this.aboutus.filter(
              (a: any) => a.title === params.get('detail')
            )[0];
            this.isBoardOfDirctories = this.data.title === 'Board of Directors';
            this.loading = false;
          }
        } else {
          this.data = this.parent;
          this.loading = false;
        }
      });
    });
  }

  menuExpanded = -1;
  //collpaseExpanded = false;

  toggleMenu(index: number) {
    setTimeout(() => {
      if (index === this.menuExpanded) this.menuExpanded = -1;
      else this.menuExpanded = index;

      console.log('index' + index);
      console.log('menuexpanded' + this.menuExpanded);
    }, 0);
  }

  detailChange() {
    console.log('Detail Change');
  }
}
