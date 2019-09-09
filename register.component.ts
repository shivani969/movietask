import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private http:ServiceService) {
    this.registerForm=new FormGroup({
      name:new FormControl(''),
      password:new FormControl(''),
      cpass:new FormControl('')

   })
  }

  ngOnInit() {
  }
  register(values){
    let name =this.registerForm.get('name').value
    let password =this.registerForm.get('password').value
    let cpass =this.registerForm.get('cpass').value
    let body={
      'name':name,
      'password':password,
      'confirmpassword':cpass
    }
    if(values.password == values.cpass)
    this.http.registerUser(body).subscribe(res =>{
      console.log(res)
    })    
  }
    func(){
      this.router.navigateByUrl("login")
    }
}
