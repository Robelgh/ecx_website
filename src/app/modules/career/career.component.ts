import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  GenericService,
  MasterIdGetter,
  LanguageService,
  CareerService
} from '../../_service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenericService,
    private masterIdGetter: MasterIdGetter,
    private LanguageService: LanguageService,
    private CareerService: CareerService
  ) {}

  isHome!: boolean;
  isDetail!: boolean;
  loading!: boolean;
  parentTitle: any = null;
  switcher: boolean = false;
  catagoryId: any = null;
  getResponse: any = {};
  params: any;
  data: any = {};
  detail: any=[]
  PageCatagories: any = [];
  pages: any = [];
  parent: any = [];
  parentName:any=null;
  imagePath = this.service.getImagePath();

  orderObj!: {};

  async ngOnInit() {
    this.parentTitle =localStorage.getItem('lang')== "አማ"? 'ኢሲኤክስ-ስልጠና': 'Ecx-academy';
    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      
      switch (localStorage.getItem('lang')) {
        case "eng":
              this.getResponse = await this.masterIdGetter.getParent('career');
              break;
        case "አማ":
                this.getResponse = await this.masterIdGetter.getParent('ክፍት የስራ ቦታ');
          break;
          default:
      }
      this.parent = this.getResponse[0];

      this.getResponse = await this.service.getAllPageCatagories(
        this.parent.id
      );
      this.PageCatagories = this.getResponse.data;

      // this.service.setData(this.PageCatagories );

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.detail=[];
          this.getResponse = await this.CareerService.getVaccancies();
          this.data = await this.getResponse.data.filter(
            (a: any) => a.type === params.get('detail')
          );
          this.parentName=params.get('detail');
          this.loading = false;
        } else if (
          params.get('pages') != null ||
          params.get('pages') != undefined
        ) {
          this.getResponse = await this.CareerService.getVaccancies();
          var detailData = await this.getResponse.data.filter(
            (a: any) => a.title === params.get('pages')
          )[0];
          this.data = await this.getResponse.data.filter(
            (a: any) => a.type === detailData.type
          );
          this.detail.push(detailData)
          this.loading = false;
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
