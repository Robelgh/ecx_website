import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GenericService,LanguageService } from '../../../_service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHome!: boolean;

  Catagories!: any[];
  Response: any={};
  Language!:any[];
  DefaultLanguage:any={};
  ChoosedLanguage:any=null;
  numberOfColumns!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Service: GenericService,
    private LanguageService: LanguageService,
    private TranslateService: TranslateService
  ) {}

  async ngOnInit() {

    this.isHome = this.router.url == '/';

    this.Response=await this.LanguageService.getLanguage();
    this.Language=this.Response.data
    this.DefaultLanguage=this.Language[0];

   this.ChoosedLanguage= localStorage.getItem('lang' || this.DefaultLanguage.shortName)

    this.Service.sharedData.subscribe((data) => {
      this.Catagories = this.partitionIntoChunks(data.data);
    });

  }
  menuExpanded = -1;
  //collpaseExpanded = false;

  toggleMenu(index: number) {
    setTimeout(async() => {
      if (index === this.menuExpanded) this.menuExpanded = -1;
      else this.menuExpanded = index;

      switch (this.menuExpanded) {
        case 0:
          this.Catagories=[]
          localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ስለኛ'):this.Service.fetchCatagories('about')
          var plus = 0;
          var module = this.Catagories.length % 4;
          this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
          this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;

          break;
        case 1:
          this.Catagories=[]
          localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ኣገልግሎት'):this.Service.fetchCatagories('service')
          var plus = 0;
          var module = this.Catagories.length % 4;
          this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
          this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
          break;

          case 2:
            this.Catagories=[]
            localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ሚድያ'):this.Service.fetchCatagories('media')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;

          case 3:
            this.Catagories=[]
            localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('አጋዥ መረጃ'):this.Service.fetchCatagories('customer support')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;
          case 4:
            this.Catagories=[]
             localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('የግብይት'):this.Service.fetchCatagories('market data')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break; 
          case 5:
            this.Catagories=[]
            localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ኢሲኤክስ-ስልጠና'):this.Service.fetchCatagories('ecx-aca')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;
          case 6:
            this.Catagories=[]
            localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ያግኙን'):this.Service.fetchCatagories('contact')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;
            case 7:
              this.Catagories=[]
              localStorage.getItem('lang') == "አማ" ? this.Service.fetchCatagories('ክፍት የስራ ቦታ'):this.Service.fetchCatagories('career')
              var plus = 0;
              var module = this.Catagories.length % 4;
              this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
              this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
              break;
                       
        default:
      }
    }, 0);
  }

  range(n: number) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  partitionIntoChunks(arr: any[], chunkSize = 4) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, Math.min(i + chunkSize, arr.length));
      chunks.push(chunk);
    }
    return chunks;
  }
  toggleCollpse() {
    setTimeout(() => {
      var v: string = document.body.style.getPropertyValue('--add-collap');
      if (v == 'none') document.body.style.setProperty('--add-collap', 'block');
      else document.body.style.setProperty('--add-collap', 'none');
    }, 0);
  }

  ChangeLanguage(language : any)
  {
    const splitStrings: string[] = language.target.value.split(',');

    localStorage.setItem('lang', splitStrings[1] )
    localStorage.setItem('langId', splitStrings[0] )
    window.location.reload()

  }

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    this.menuExpanded = -1;
  }

  scroll = (): void => {
    setTimeout(() => {
      let scrollHeigth;

      if (window.innerWidth < 350) {
        scrollHeigth = 150;
      } else if (window.innerWidth < 500 && window.innerWidth > 350) {
        scrollHeigth = 250;
      } else if (window.innerWidth < 700 && window.innerWidth > 500) {
        scrollHeigth = 350;
      } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
        scrollHeigth = 500;
      } else {
        scrollHeigth = 650;
      }

      if (window.scrollY >= scrollHeigth) {
        document.body.style.setProperty('--navbar-scroll', 'white');
        //  document.body.style.setProperty('--navbar-scroll-text', "black");
        document.body.style.setProperty(
          '--navbar-scroll-shadow',
          '0px 6px 12px -5px #000000'
        );
      } else if (window.scrollY < scrollHeigth) {
        document.body.style.setProperty(
          '--navbar-scroll',
          'rgba(0, 0, 0, 0.5)'
        );
        document.body.style.setProperty('--navbar-scroll-text', 'white');
        document.body.style.setProperty('--navbar-scroll-shadow', 'none');
        document.body.style.setProperty('--img-back-ground', 'invert(100%)');
      }
    }, 0);
  };
}
