import { Component } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent {

  lineChart ={
    labels : [ "day1", "day2","day3","day4","day5","day6","day7", "day8", "day9","day10",
               "day11", "day12","day13","day14","day15","day16","day17", "day18", "day19","day20",
               "day21", "day22","day23","day24","day25","day26","day27", "day28", "day29","day30",],
    datasets : [
      {
        data :[10,20,30,40,50,5,80,4,56,7,4,8,9,10,3,10,20,30,40,50,5,80,4,56,7,4,8,9,10,3],
        label :"Closing price for Coffee"
      }
    ]
  }

}
