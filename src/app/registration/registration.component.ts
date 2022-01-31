import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }

  // onRegistration(registrationData: {
  //   firstName: string, lastName: string,
  //   userName: string, password: string, birthdayDate: string, femaleGender: string,
  //   maleGender: string, otherGender: string, emailAddress: string, phoneNumber: string
  // }) {
     onRegistration(registrationData:NgForm){
    console.log(registrationData);
    this.http.post('https://petstore.swagger.io/v2/user/', registrationData)
      .subscribe(responseData => {
        console.log(responseData);
      })

  }

}
