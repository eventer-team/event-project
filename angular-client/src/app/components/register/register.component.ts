import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() {

  }

  onSubmit(e, value) {
    e.preventDefault();

    this.authService.registerUser(value).subscribe(data => {
      console.log(data);
    });
  }
}
