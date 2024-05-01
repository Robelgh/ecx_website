import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AbstractControlOptions,AbstractControl, FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {
  GenericService,
  MasterIdGetter,
  LanguageService,
} from '../../_service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: GenericService,
    private masterIdGetter: MasterIdGetter,
  ) {}


  form!: FormGroup;
  loading = false;
  submitted = false;
  response!: boolean;
  isHome!: boolean;
  isAbout!: boolean;
  isDetail!: boolean;
  parentTitle: any = null;
  switcher: boolean = false;
  catagoryId: any = null;
  getResponse: any = {};
  params: any;
  data: any = {};
  PageCatagories: any = [];
  detail:any=[]
  splitStrings: any = [];
  pages: any = [];
  parent: any = [];
  imagePath = this.service.getImagePath();
  async ngOnInit() {
    this.parentTitle =localStorage.getItem('lang')== "አማ"? 'ያግኙን': 'Contact';

    
  this.form = this.formBuilder.group(
    {
       firstname: ['', Validators.required],
       email: ['', Validators.required],
       message: ['', Validators.required],
    }
  );

    this.route.params.subscribe(async (params) => {
      // this.loading = true;
      this.isHome = this.router.url == '/';
      this.isAbout = this.router.url === '/contactus';

      switch (localStorage.getItem('lang')) {
        case "eng":
              this.getResponse = await this.masterIdGetter.getParent('contact');
              break;
        case "አማ":
                this.getResponse = await this.masterIdGetter.getParent('ያግኙን');
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
          this.data = await this.PageCatagories.filter(
            (a: any) => a.title === params.get('detail')
          )[0];
          this.getResponse = await this.service.getAllPage(this.data.id);
          this.pages = this.getResponse.data;
          this.loading = false;
          this.detail=[]
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
            this.detail.push(this.data);
          
        } else {
          this.data = this.parent;
          this.loading = false;
        }
      });
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else{
      console.log("this.form.value")
    }

    this.loading = true;

     }
  
 



  
}
