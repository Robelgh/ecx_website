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
  loading!: boolean;

  switcher: boolean = false;
  catagoryId: any = null;
  getResponse: any = {};
  params: any;
  data: any = {};
  PageCatagories: any = [];
  pages: any = [];
  parent: any = [];
  imagePath = this.service.getImagePath();

  orderObj!: {};

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      this.isAbout = this.router.url === '/about';

      this.getResponse = await this.masterIdGetter.getParent('about');
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
          this.catagoryId = this.data.id;
          this.getResponse = await this.service.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.loading = false;
        }

        if (params.get('pages') != null || params.get('pages') != undefined) {
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
