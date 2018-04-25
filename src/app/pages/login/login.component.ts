import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './layout.html',
  styleUrls: ['./style.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    if (!localStorage.userList) {
      localStorage.setItem('userList', JSON.stringify([
        {
          name: 'Admin',
          email: 'admin@admin.com',
          isAdmin: 'checked',
          password: 'admin',
          id: 1
        }
      ]));
    }
  }

  title = 'Task Manager';
  user: User;
  email = '';
  password = '';

  onSubmit(f) {
    this.user = new User().getUserByLogin(this.email, this.password);
    if (typeof this.user === 'object') {
      localStorage.isAdmin = this.user.isAdmin;
      localStorage.token = 'token-generico=nao_seguro';
      if (!localStorage.taskList) {
        localStorage.setItem('taskList', JSON.stringify([])); }
      this.router.navigate(['/home']);
    } else {
      alert('usuário inválido');
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {
  }
}

