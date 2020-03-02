import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 

  constructor(private router:Router,private registerservice:RegisterService) { }
  registerList: Observable<any[]>;
  ngOnInit() {
    this.registerservice.getAllUsers("").subscribe(data=>{
      this.registerList=data;
  });
}
}
