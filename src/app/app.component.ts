import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecx_website';
  lists:boolean=false;
  
  onPrevClick(): void{
  
  }
    // $('.hero__categories__all').on('click', function(){
    //     $('.hero__categories ul').slideToggle(400);
    // });
}
