import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../register.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Register } from '../register';



@Component({

 selector: 'app-register',

 templateUrl: './register.component.html',

 styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {

 constructor(private registerservice:RegisterService) { }

 register : Register=new Register();

 submitted = false;

 ngOnInit() {

 }

 registersaveform=new FormGroup({

  firstname:new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern("^[a-zA-Z]{5,10}$") ]) ,

  lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{5,10}$") ]),

  age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60) ]) ,

  email:new FormControl('',[Validators.required,Validators.email]),

  phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10}")]),

  streetaddress:new FormControl('',[Validators.required]),

  city:new FormControl('',[Validators.required]),

  state:new FormControl('',[Validators.required]),

  country:new FormControl('',[Validators.required]),

});

saveRegister(saveRegister){

 this.register=new Register();

 this.register.firstname=this.Firstname.value;

 this.register.lastname=this.Lastname.value;

 this.register.age=this.Age.value;

 this.register.email=this.Email.value;

 this.register.phone=this.Phone.value;

 this.register.streetaddress=this.Streetaddress.value;

 this.register.city=this.City.value;

 this.register.state=this.State.value;

 this.register.country=this.Country.value;

 this.submitted = true;

 this.save();

}

save() {

 this.registerservice.saveRegister(this.register)

  .subscribe(data => console.log(data), error => console.log(error));

 this.register = new Register();

}

get Firstname(){

 return this.registersaveform.get('firstname');

}

get Lastname(){

 return this.registersaveform.get('lastname');

}

get Age(){

 return this.registersaveform.get('age');

}

get Email(){

 return this.registersaveform.get('email');

}

get Phone(){

 return this.registersaveform.get('phone');

}

get Streetaddress(){

 return this.registersaveform.get('streetaddress');

}

get City(){

 return this.registersaveform.get('city');

}

get State(){

 return this.registersaveform.get('state');

}

get Country(){

 return this.registersaveform.get('country');

}

saveregisterForm(){

 this.submitted=false;

 this.registersaveform.reset();

}

}

