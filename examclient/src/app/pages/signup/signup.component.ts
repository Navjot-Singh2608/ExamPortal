import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  formSubmit = () => {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snackbar.open('Uesr name is required!!', 'Ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    // add user : user service
    this.userService.addUser(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        Swal.fire(
          'Successfully registered !!',
          'User is registered',
          'success'
        );
      },
      (error) => {
        //error

        this.snackbar.open('something went wrong', 'Ok', {
          duration: 3000,
        });
      }
    );
  };

  clearForm = () => {
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  };
}
