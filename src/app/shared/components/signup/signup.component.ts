import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signup!:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ){}

    async ngOnInit () {
      this.signup=this.router.url == '/signup'
      }
      onNavigate() {
        this.router.navigate(['/login']);
      }  

}
