import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../../../_service';
@Component({
  selector: 'app-warehouse-service',
  templateUrl: './warehouse-service.component.html',
  styleUrls: ['./warehouse-service.component.css'],
})
export class WarehouseServiceComponent {
  @Input() parenttitle!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  isHome!: boolean;
  isService!: boolean;
  isDetail!: boolean;
  getResponse: any = {};
  params: any;
  data: any = {};
  parentService: any = [];
  parent_title!: string;
  aboutBanner: any = [];

  orderObj!: {};

  ngOnChanges() {
    this.parent_title = this.parenttitle;
  }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.isHome = this.router.url == '/';
      this.isService = this.router.url === '/service';

      this.getResponse = await this.service.getParentService(this.parent_title);
      this.parentService = this.getResponse;
    });
  }
}
