import { Component } from '@angular/core';

@Component({
  selector: 'app-registratin',
  templateUrl: './registratin.component.html',
  styleUrls: ['./registratin.component.css']
})
export class RegistratinComponent {
  name!:string;
  surname!:string;
  username!:string;
  password!:string;
}
