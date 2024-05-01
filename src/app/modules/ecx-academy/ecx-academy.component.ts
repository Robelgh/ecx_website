import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  GenericService,
  MasterIdGetter,
  LanguageService,
  CareerService
} from '../../_service';

@Component({
  selector: 'app-ecx-academy',
  templateUrl: './ecx-academy.component.html',
  styleUrls: ['./ecx-academy.component.css']
})
export class EcxAcademyComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenericService,
    private masterIdGetter: MasterIdGetter,
  ) {}

  isHome!: boolean;
  isDetail!: boolean;
  loading!: boolean;
  parentTitle: any = localStorage.getItem('lang')== "አማ"? 'ኢሲኤክስ-ስልጠና': 'Ecx-academy';
  switcher: boolean = false;
  catagoryId: any = null;
  getResponse: any = {};
  params: any;
  data: any = {};
  detail: any=[];
  splitStrings: any=[];
  PageCatagories: any = [];
  pages: any = [];
  parent: any = [];
  parentName:any=null;
  imagePath = this.service.getImagePath();

  orderObj!: {};

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      
      switch (localStorage.getItem('lang')) {
        case "eng":
              this.getResponse = await this.masterIdGetter.getParent('ecx-academy');
              break;
        case "አማ":
                this.getResponse = await this.masterIdGetter.getParent('ኢሲኤክስ-ስልጠና');
              break;
          default:
      }
      this.parent = this.getResponse[0];
  

      this.getResponse = await this.service.getAllPageCatagories(
        this.parent.id
      );
      this.PageCatagories = this.getResponse.data;

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.detail=[];
          this.data = await this.PageCatagories.filter(
            (a: any) => a.title === params.get('detail')
          )[0];
          this.getResponse =await this.service.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.parentName=params.get('detail');
          this.loading = false;
        } else if (
          params.get('pages') != null ||
          params.get('pages') != undefined
        ) {
       
             this.splitStrings = params.get('pages')?.split(',');
             this.getResponse = await this.service.getAllPage(this.splitStrings[1]);
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

  isnearing(givendate : Date) : boolean {
    const currentDate = new Date();
    const deadlineMinusTwoDays = new Date(givendate.getTime() - (2 * 24 * 60 * 60 * 1000));
    console.log(deadlineMinusTwoDays)
    return currentDate >= deadlineMinusTwoDays && currentDate < givendate;
}

}
