import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './layout.html',
  styleUrls: ['./style.css']
})
export class HomeComponent {

  title = 'Tarefas';
  taskList = (JSON.parse(localStorage.getItem('taskList')));
  taskSelected = { cod: 0, desc: '', status: '' };
  newTask = { cod: 0, desc: '', status: '' };

  // CRUD
  saveTask(task, cBox) {
    const last = this.getLastTaskCode();
    if (this.taskSelected.cod <= last) {
      this.taskList.map((t) => this.updateTask(t, this.taskSelected.cod, cBox));
    } else {
      this.taskList.push({
        cod: this.newTask.cod,
        desc: this.newTask.desc,
        status: ''
      });
    }
    localStorage.taskList = JSON.stringify(this.taskList);
    $('#taskModal').modal('hide');
  }
  updateTask(t, cod, cBox) {
    if (t.cod === cod) {
      t.desc = this.taskSelected.desc;
      if (cBox) {
        const status = t.status;
        t.status = (status === 'checked') ? '' : 'checked';
      }
    } else {
      t.desc = t.desc;
    }
  }
  deleteTask() {
    const index = this.taskList.indexOf(this.taskSelected);
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
    this.cleanLS();
    localStorage.taskList = JSON.stringify(this.taskList);
  }
  updateStatus(cod) {
    const task = this.selectTask(cod);
    this.saveTask(task, true);
  }

  // GET
  getTask(cod) {
    return this.taskList.find((t) => t.cod === cod);
  }
  getLastTaskCode() {
    const lastCode = (this.taskList.length > 0) ? this.taskList[this.taskList.length - 1].cod : 0;
    return lastCode;
  }

  // SUPPORT FUNCTIONS
  selectTask(cod) {
    this.taskSelected = (this.getTask(cod));
  }
  unselectTask(cod) {
    this.taskSelected = { cod: 0, desc: '', status: '' };
  }
  createTask() {
    this.taskSelected = { cod: 0, desc: '', status: '' };
    this.newTask = this.taskSelected;
    this.newTask.cod = this.getLastTaskCode() + 1;
  }
  cleanLS() {
    localStorage.taskList = [];
  }

}
