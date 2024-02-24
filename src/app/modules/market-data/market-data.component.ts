import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Observable,
  Observer,
  firstValueFrom,
  Subscription,
  interval,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AboutService, MarketDatatService } from '../../_service';
import { MarketDataModel } from 'src/app/_model';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css'],
})
export class MarketDataComponent {
  isHome!: boolean;
  isMarket!: boolean;
  title!: any;

  a!: number;
  b!: number;
  c!: number;
  d!: number;
  e!: number;
  f!: number;

  switcher!: any;
  getResponse: any = {};
  generatedNumber!: number;
  
  asyncTabs: Observable<ExampleTab[]>;
  dataSource: any;

  dataOne: MarketDataModel[] = [];
  dataTwo: MarketDataModel[] = [];
  selectedValue!: string;
  selectedCar!: string;
  Descriptionelement!: number;

  foods: Food[] = [
    { value: 'Weakly', viewValue: 'Weakly' },
    { value: 'Monthly', viewValue: 'Monthly' },
    { value: '6-month', viewValue: '6-month' },
    { value: 'Anually', viewValue: 'Anually' },
  ];

  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];

  displayedColumns: string[] = [
    'TD',
    'SY',
    'WCODE',
    'PYEAR',
    'OP',
    'CP',
    'DH',
    'DL',
    'DIFF',
    'VLOT',
    'VQUINTAL',
    'PC',
    'Links',
  ];

  lineChart = {
    labels: [
      'day1',
      'day2',
      'day3',
      'day4',
      'day5',
      'day6',
      'day7',
      'day8',
      'day9',
      'day10',
      'day11',
      'day12',
      'day13',
      'day14',
      'day15',
      'day16',
      'day17',
      'day18',
      'day19',
      'day20',
      'day21',
      'day22',
      'day23',
      'day24',
      'day25',
      'day26',
      'day27',
      'day28',
      'day29',
      'day30',
    ],
    datasets: [
      {
        data: [
          10, 20, 30, 40, 50, 5, 80, 4, 56, 7, 4, 8, 9, 10, 3, 10, 20, 30, 40,
          50, 5, 80, 4, 56, 7, 4, 8, 9, 10, 3,
        ],
        label: 'Closing price for Coffee',
      },
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MarketDatatService // yourSubscription: Subscription
  ) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Coffee', content: 'Content 1' },
          { label: 'Sesame', content: 'Content 2' },
          { label: 'Mungbean', content: 'Content 3' },
          { label: 'Haricotbeen', content: 'Content 1' },
          { label: 'Chickpeas', content: 'Content 2' },
          { label: 'Soyabeans', content: 'Content 3' },
          { label: 'SpeckledBeans', content: 'Content 2' },
          { label: 'WhitePigeonPeas', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }

  dataHolder!: MarketDataModel[];

  async ngOnInit() {
    interval(1000).subscribe((x) => {
      this.generateNumber();
    });

    this.getResponse = await this.service.getAll();
  
    for(let i=0 ; i< 7 ; i++)
    {
      this.dataOne.push(this.getResponse[i])
    }
    for(let i=7 ; i< 14 ; i++)
    {
      this.dataTwo.push(this.getResponse[i])
    }
    this.isHome = this.router.url == '/';
    this.isMarket = this.router.url === '/market';
    this.title = 'Market data';

    this.route.params.subscribe(async (params) => {
      this.isHome = this.router.url == '/';

      this.route.queryParamMap.subscribe(async (params) => {
        if (params.get('detail') != null || params.get('detail') != undefined) {
          this.switcher = params.get('detail');
        } else {
        }
      });
    });
  }

  generateNumber(): void {
    this.a = Math.round(Math.random()) * 2 - 1;

    if (this.a < 0) {
      this.dataHolder = this.dataOne;
      const ELEMENT_DATA: MarketDataModel[] = this.dataOne;
      this.dataSource = new MatTableDataSource<MarketDataModel>(ELEMENT_DATA);
    } else {
      this.dataHolder = this.dataTwo;
      const ELEMENT_DATA: MarketDataModel[] = this.dataTwo;
      this.dataSource = new MatTableDataSource<MarketDataModel>(ELEMENT_DATA);
    }
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  highlightRow(element: any, index : number)
  {
    this.Descriptionelement=index;
    // element.Symbol="HELLO"
  }
}
