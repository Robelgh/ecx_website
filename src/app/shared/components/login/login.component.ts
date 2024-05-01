import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions,AbstractControl, FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import { AuthService } from '../../../_service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login!:boolean;
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  response!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthService
    ){}

    async ngOnInit () {
      this.login=this.router.url == '/login'

      this.form = this.formBuilder.group(
        {
           id: "00000000-0000-0000-0000-000000000000",
           createdBy: "robel",
           createdDate: "2023-08-23T08:17:13.733Z",
           updatedDate: "2023-08-23T08:17:13.733Z",
           updatedBy: "mrx",
           firstname: ['', Validators.required],
           password: ['', Validators.required],
        }
      );
      }

      onNavigate() {
        this.router.navigate(['/signup']);
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

        this.loading = true;

        console.log(this.form.value)

        
        this.response= await this.service.isAuthenticated(this.form.value)
     
         }

}
