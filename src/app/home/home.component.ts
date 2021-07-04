import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model'; 
import { ChartType } from 'chart.js';

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  public page = 1;
    public pageSize = 4;

  public male_number = 0;
  public female_number = 0;
  public active_number = 0;
  public inactive_number = 0;
  
  private reponse:any = []
  data:any = [];
  users_number=0;
  users: User[] = [];
  pieChartData: number[] = [];
  pieChartLabels: string[] = [];
  colors: string[] = [];
  user_name: string = "";
  public doughnutChartLabels = ['Active', 'Inactive'];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut' as ChartType;
  public pieChartType = 'pie' as ChartType;
  constructor(private http: HttpClient) { 
  

  }

  ngOnInit(): void {
    const url ='https://gorest.co.in/public-api/users'
    let obj = JSON.parse(localStorage.getItem('user') || '{}');
    this.user_name = obj.name;
    this.http.get(url).subscribe((res)=>{
      this.reponse = res
      this.data =  this.reponse.data;
      for (let item of this.data) {
        if (item.gender == 'Male') {
            this.male_number++ ; 
                
        }else
        {
          this.female_number++;
        }

        if (item.status == 'Active') {
          this.active_number++; 
              
        }else
        {
          this.inactive_number++;
        }
    } 
    this.pieChartLabels = ['Male', 'Female'];
    this.pieChartData = [this.male_number, this.female_number]
    this.colors = ["rgba(159,204,0,0.5)","rgba(250,109,33,0.7)"];

 

    this.doughnutChartData = [this.active_number, this.inactive_number]
    
   
      this.data.forEach(
        (element: any) =>
        
        this.users.push(new User(element.name,element.gender,element.created_at)),
         
        );
       
      this.users_number = this.data.length;
            
    })
  }
  onChangePageSize(newValue: number){ 
    this.pageSize = newValue;
  } 
  
  

}
