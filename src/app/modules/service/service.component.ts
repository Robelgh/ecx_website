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
  getResponse: any = {};
  parenttitle: any = {};
  params: any;
  data: any = {};
  warehouseServicesData: any = [];
  services: any = [];
  parent: any = [];
  imagePath = this.service.getImagePath();
  aboutBanner: any = [];

  orderObj!: {};

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.isHome = this.router.url == '/';
      this.isService = this.router.url === '/service';

      this.getResponse = await this.masterIdGetter.getParent('service');
      this.parent = this.getResponse[0];

      this.getResponse = await this.service.getAll();
      this.services = this.getResponse.data;

      this.getResponse = await this.service.getParent();
      this.parent = this.getResponse.data;
      this.aboutBanner.push(this.parent);

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          if (params.get('id') != null || params.get('id') != undefined) {
            this.getResponse = await this.service.getParentServiceById(
              params.get('id')
            );
            this.data = this.getResponse[0];
          } else {
            this.data = await this.services.filter(
              (a: any) => a.title === params.get('detail')
            )[0];
            this.parenttitle = this.data.title;
          }
        } else {
          this.data = this.parent;
        }
      });
    });
  }
}
