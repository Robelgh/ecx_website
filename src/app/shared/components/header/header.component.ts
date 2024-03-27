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

import { GenericService } from '../../../_service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHome!: boolean;

  Catagories!: any[];

  numberOfColumns!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Service: GenericService
  ) {}

  ngOnInit(): void {
    this.Service.sharedData.subscribe((data) => {
      this.Catagories = this.partitionIntoChunks(data.data);
    });

    document.body.style.setProperty('--navbar-scroll', 'rgba(0, 0, 0, 0.5)');
    document.body.style.setProperty('--navbar-scroll-text', 'white');
    document.body.style.setProperty('--navbar-scroll-shadow', 'none');
    document.body.style.setProperty('--img-back-ground', 'invert(100%)');

    this.isHome = this.router.url === '/';

    window.addEventListener('scroll', this.scroll, true);

    document.body.style.setProperty('--navbar-scroll', 'white');
    document.body.style.setProperty('--navbar-scroll-text', 'black');
    document.body.style.setProperty('--add-collap', 'none');
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
          this.Service.fetchCatagories('about')
          var plus = 0;
          var module = this.Catagories.length % 4;
          this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
          this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;

          break;
        case 1:
          this.Catagories=[]
          this.Service.fetchCatagories('service')
          var plus = 0;
          var module = this.Catagories.length % 4;
          this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
          this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
          break;

          case 2:
            this.Catagories=[]
            this.Service.fetchCatagories('media')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;

          case 3:
            this.Catagories=[]
            this.Service.fetchCatagories('customer support')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;
          case 4:
            this.Catagories=[]
            this.Service.fetchCatagories('market data')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break; 
          case 5:
            this.Catagories=[]
            this.Service.fetchCatagories('career')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;
          case 4:
            this.Catagories=[]
            this.Service.fetchCatagories('contact us')
            var plus = 0;
            var module = this.Catagories.length % 4;
            this.Catagories.length % 4 == 0 ? (plus = 0) : (plus = 1);
            this.numberOfColumns = (this.Catagories.length - module) / 4 + plus;
            break;       
        // ... more cases
        default:
        // Code to execute if expression doesn't match any case
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

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    //document.body.style.setProperty('--add-chil',"none");
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
