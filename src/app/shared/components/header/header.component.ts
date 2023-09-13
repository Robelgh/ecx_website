import { Component, ElementRef, HostListener, ViewChild, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHome!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ){}


 ngOnInit(): void {

  this.isHome=this.router.url === '/'

   window.addEventListener('scroll', this.scroll, true);

   if(!this.isHome)
   {
    document.body.style.setProperty('--navbar-scroll', "white");
    document.body.style.setProperty('--navbar-scroll-text', "black");
    document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
   }
 

    //document.body.style.setProperty('--navbar-scroll', "rgba(0, 0, 0, 0.5)");
  
   //document.body.style.setProperty('--navbar-scroll-text', "white");
   //document.body.style.setProperty('--navbar-scroll-shadow', "none");
  //  document.body.style.setProperty('--add-chil',"none");
   document.body.style.setProperty('--add-collap',"none");

 }
 menuExpanded = -1;
 //collpaseExpanded = false;

  toggleMenu(index:number) {
    setTimeout(() => {
      // var value:string = document.body.style.getPropertyValue('--add-chil');
      // if(value=='none')
      //   document.body.style.setProperty('--add-chil',"block");
      // else
      //   document.body.style.setProperty('--add-chil',"none");
      
      if(index === this.menuExpanded) this.menuExpanded = -1;
      else this.menuExpanded = index;

      console.log("index" + index)
      console.log("menuexpanded" + this.menuExpanded)
    }, 0);
  }
  toggleCollpse() {
    setTimeout(() => {
      var v:string = document.body.style.getPropertyValue('--add-collap');
      if(v=='none')
        document.body.style.setProperty('--add-collap',"block");
      else
        document.body.style.setProperty('--add-collap',"none");
    }, 0);
  }

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    //document.body.style.setProperty('--add-chil',"none");
    this.menuExpanded = -1;
  };

 scroll = (): void => {
  setTimeout(() => {

  let scrollHeigth;

  if(window.innerWidth < 350){
   scrollHeigth = 150;
  }else if(window.innerWidth < 500 && window.innerWidth > 350){
   scrollHeigth = 250;
  }else if(window.innerWidth < 700 && window.innerWidth > 500){
   scrollHeigth = 350;
  }else if(window.innerWidth < 1000 && window.innerWidth > 700){
   scrollHeigth = 500;
  }else{
    scrollHeigth = 650;
  }

   if(window.scrollY >= scrollHeigth){
     document.body.style.setProperty('--navbar-scroll', "white");
     document.body.style.setProperty('--navbar-scroll-text', "black");
     document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
   }else if(window.scrollY < scrollHeigth && !this.isHome){
     document.body.style.setProperty('--navbar-scroll', "rgba(0, 0, 0, 0.5)");
     document.body.style.setProperty('--navbar-scroll-text', "white");
     document.body.style.setProperty('--navbar-scroll-shadow', "none");
     document.body.style.setProperty('--img-back-ground', "invert(100%)");

   }
  }, 0);
  console.log(this.isHome);
 }
 
  

}
