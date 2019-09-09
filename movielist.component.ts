import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
search='';
public moviedata;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    let headers={'id':JSON.parse(localStorage.getItem("logindata")).success._id}
      this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id).subscribe(data =>{
        console.log("1",data)
      this.moviedata= data['success'].movies})
      console.log(this.moviedata)
    }
  addmovie(){
    this.router.navigateByUrl('movie')
  }
}
