import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SaleAndBuyOrderService } from 'src/app/_service';

@Component({
  selector: 'app-sale-and-buy-order',
  templateUrl: './sale-and-buy-order.component.html',
  styleUrls: ['./sale-and-buy-order.component.css'],
})
export class SaleAndBuyOrderComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SaleAndBuyOrderService
  ) {}

  isHome!: boolean;
  isAbout!: boolean;
  isDetail!: boolean;
  isBoardOfDirctories!: boolean;

  switcher: boolean = false;
  // isBoardOfDirctories!:booalean;
  getResponse: any = {};
  params: any;
  data: any = {};
  aboutus: any = [];
  parent: any = [];
  boardOfDirectories: any = [];
  imagePath = this.service.getImagePath();
  aboutBanner: any = [];
  loading!: boolean;
  orderObj!: {};

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.loading = true;
      this.isHome = this.router.url == '/';
      this.isAbout = this.router.url === '/about';

      this.getResponse = await this.service.getAll();
      this.aboutus = this.getResponse.data;

      this.getResponse = await this.service.getParent();
      this.parent = this.getResponse.data;
      this.aboutBanner.push(this.parent);

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
