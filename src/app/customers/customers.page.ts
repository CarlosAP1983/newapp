import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importamos HttpClient
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient // Inyectamos HttpClient
  ) { }

  ngOnInit() {
    console.log("holanda holanda que talca!?");
      this.getuser().subscribe(res=>{
        console.log("Res", res)
        this.users = res;
      });
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  //llamada a customer.json
  getuser(){
    return this.http
    .get("assets/files/customer.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }
}
