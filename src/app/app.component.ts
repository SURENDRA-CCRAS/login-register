import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
/* import { HttpClient, HttpHeaders } from '@angular/common/http'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'demoApp';
    email:string;
    password:string;
    remail:string;
    rpassword:string;
    rcpassword:string;
    firstName: string;
    public mobileno: any;
    public gender: string;
  public dob: any;
  public address: any;
  public country: string;
  public institution: any;
  public profession: any;
  public city: any;
  
  pickers: Date;
  
  baseUrl = environment.baseUrl;
  constructor(private snackBar:MatSnackBar){

  }
  register() {
    alert('fullname :' + this.firstName + 'email :' + this.email + 'password :' + this.rpassword + 'password conform :' + this.rcpassword + 'country :'+this.country);

    var UserData = new FormData();
    UserData.append('request','register_request');
    UserData.append('name',this.firstName);
    UserData.append('email',this.email);
    UserData.append('mob',this.mobileno);
    UserData.append('pass', this.rpassword);
    UserData.append('rcpass', this.rcpassword);    
    UserData.append('gender',this.gender);
    UserData.append('dob',this.dob);
    UserData.append('address',this.address);
    UserData.append('nationality',this.country);
    UserData.append('organization',this.institution);
    UserData.append('profession',this.profession);
    UserData.append('city',this.city);
    
/*     let submitData=this.http.post(this.baseUrl+'/registerfor.php',UserData);
    submitData.subscribe((data:any)=>
    {
      alert("Registration Successful...");


    },
    error => {
      alert("Email Id Or Mobile no already registered..");
   
    }    );
  */


  }
  login() {
    alert('email :' + this.email + 'password :' + this.password );
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

  ngOnInit() {
    
  }


}
