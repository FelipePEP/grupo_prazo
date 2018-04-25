import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './layout.html',
  styleUrls: ['./style.css']
})
export class UsersComponent {

  title = 'Usuários';
  userList = (JSON.parse(localStorage.getItem('userList')));
  userSelected = new User();
  newUser: User;

  // CRUD
  saveUser(user, cBox) {
    const last = this.getLastUserId();
    if (this.userSelected.id <= last) {
      this.userList.map((t) => this.updateUser(t, this.userSelected.id, cBox));
    } else {
      this.userList.push({
        id: this.newUser.id,
        name: this.newUser.name,
        email: this.newUser.email,
        password: this.newUser.password,
        isAdmin: (this.newUser.isAdmin) ? 'checked' : ''
      });
    }
    localStorage.userList = JSON.stringify(this.userList);
    $('#userModal').modal('hide');
  }
  updateUser(t, id, cBox) {
    if (t.id === id) {
      t.name = this.userSelected.name;
      t.email = this.userSelected.email;
      t.password = this.userSelected.password;
      if (cBox) {
        const adm = t.isAdmin;
        t.isAdmin = (adm === 'checked') ? '' : 'checked';
      }
    }
  }
  deleteUser() {
    const index = this.userList.indexOf(this.userSelected);
    if (index > -1) {
      this.userList.splice(index, 1);
    }
    this.cleanLS();
    localStorage.userList = JSON.stringify(this.userList);
  }
  updateRole(id) {
    this.selectUser(id);
    this.saveUser(this.userSelected, true);
  }

  // GET
  getUser(id) {
    return this.userList.find((t) => t.id === id);
  }

  getLastUserId() {
    const lastId = (this.userList.length > 0) ? this.userList[this.userList.length - 1].id : 0;
    return lastId;
  }

  // SUPPORT FUNCTIONS
  selectUser(id) {
    this.userSelected = (this.getUser(id));
  }
  unselectUser(id) {
    this.userSelected = new User();
  }
  createUser() {
    this.userSelected = new User();
    this.newUser = this.userSelected;
    this.newUser.id = this.getLastUserId() + 1;
  }
  cleanLS() {
    localStorage.userList = [];
  }

}
