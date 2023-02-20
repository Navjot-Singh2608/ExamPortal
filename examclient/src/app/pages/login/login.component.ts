import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private snackbar: MatSnackBar, private login: LoginService) {}

  public user = {
    username: '',
    password: '',
  };

  // user login
  userLogin = () => {
    if (this.user.username.trim() == '' || this.user.username == null) {
      this.snackbar.open('Username is required!!', '', {
        duration: 3000,
      });
      return;
    }
    if (this.user.password.trim() == '' || this.user.password == null) {
      this.snackbar.open('Password is required!!', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.user).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // user Reset
  userReset = () => {};
}
