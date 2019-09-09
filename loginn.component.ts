import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  loginform:FormGroup;
  constructor(private router:Router,private http:ServiceService ) {
    this.loginform=new FormGroup({
      name:new FormControl(''),
      password:new FormControl('')

    })
   }

  ngOnInit() {
  }
func1(){
  this.router.navigateByUrl("register")
}
 loginpage(){
   let name =this.loginform.get('name').value
      let password =this.loginform.get('password').value
     let body={
       'name':name,
       'pass':password,
     }
     this.http.loginUser(body).subscribe(result =>{
       console.log(result)
       this.router.navigateByUrl("movie")
     })
    }
 }

