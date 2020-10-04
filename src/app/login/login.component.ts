import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    
  }

  login(){
    console.log("login started...")
    const loginRequest = {
      'userName' : this.loginForm.controls.username.value,
      'pwd' : this.loginForm.controls.password.value // we have to encrypt the value
    }
   this.userService.login("login",loginRequest).subscribe(response=>{
    if(response.token!=null){
      this.router.navigate(['/view']);
    }
   })
  }

}
