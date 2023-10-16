import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})


export class TickerComponent implements OnInit {

   data=[
    {
      symbol:"LUBPAA2",
      clossingPrize:4000,
      change:20
    },
    {
      symbol:"LUBPAA3",
      clossingPrize:6000,
      change:0
    },
    {
      symbol:"LUBPAA4",
      clossingPrize:3000,
      change:-2
    },
    {
      symbol:"LUBPAA5",
      clossingPrize:6000,
      change:4
    },
    {
      symbol:"LUJM2",
      clossingPrize:3000,
      change:-8
    },
    {
      symbol:"LUJM4",
      clossingPrize:2000,
      change:0
    },
    {
      symbol:"LUSD5",
      clossingPrize:5000,
      change:10
    },
    {
      symbol:"LUSH4",
      clossingPrize:2000,
      change:-10
    },
  ];

  async ngOnInit() {
   
      console.log(this.data)
      
     }

}
