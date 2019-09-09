import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  registerForm:FormGroup
  constructor(private router:Router,private http:ServiceService ) {
    this.registerForm=new FormGroup({
      mname:new FormControl(''),
      lang:new FormControl(''),
      genre:new FormControl('')

    })
   }

  ngOnInit() {
  }

save(a){
     let mname =this.registerForm.get('mname').value
     let lang =this.registerForm.get('lang').value
     let genre=this.registerForm.get('genre').value
      let body={
        id:JSON.parse(localStorage.getItem("logindata")).success._id,
        'MovieName':mname,
        'Language':lang,
        'Genre':genre 

      }
      this.http.movies(body).subscribe(res =>{console.log(res)})
      console.log(a)
      this.router.navigateByUrl("movlist")
     }
     cancel(){
       this.router.navigateByUrl("movlist")
     }
 }

  
