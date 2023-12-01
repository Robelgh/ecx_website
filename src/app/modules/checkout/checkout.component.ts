import { Component,Input } from '@angular/core';
import { Observable,Observer, firstValueFrom, Subscription, interval } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  
  title!:any;
  selectedIndex=0;
  images = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]
  @Input() indicators=true;
  @Input() controls= true;
  @Input() autoSlide= false;
  @Input() slideInterval=10000;
  bannerCarousel:any=[];
  asyncTabs: Observable<ExampleTab[]>;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(
    // yourSubscription: Subscription
  ) {



    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Login', content: 'Content 1'},
          {label: 'Signup', content: 'Content 2'},
        ]);
      }, 1000);
    });
  }

  async ngOnInit () {

    this.title="checkout";
    if(this.autoSlide)
    {
      this.autoslideImages();
    }
  }

  autoslideImages():  void{
    setInterval(()=>
    {
      this.onNextClick();
    },this.slideInterval)
   }

selectImage(index:number): void 
{
  this.selectedIndex=index;
}

onPrevClick():void{

  console.log("hello")
  if(this.selectedIndex === 0)
  {
    this.selectedIndex = this.images.length - 1
  }
  else
  {
    this.selectedIndex--;
  }
}

onNextClick():void {

  if(this.selectedIndex === this.images.length - 1)
  {
    this.selectedIndex = 0
  }
  else
  {
    this.selectedIndex++;
  }

}

}
