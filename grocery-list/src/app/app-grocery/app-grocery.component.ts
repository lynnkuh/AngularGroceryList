import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css'
  ]
})
export class AppGroceryComponent implements OnInit {

  
  task = {
    name: '',
    id: 0
  };

  tasks = [];

  onClick() {
    console.log("clicked");
    if (this.task.id == 0) {
      this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false});
    }
    this.task = {
      name: '',
      id: 0
    };
  }

  onEdit(item){
    console.log("Edit");
    this.task = item;
  }

  onDelete(item){
   for (var i=0; i < this.tasks.length; i++) {
     if (item.id == this.tasks[i].id) {
       this.tasks.splice(i,1);
       break;
     }
   }
  }

  onStrike(item) {
    console.log("strike");
    for (var i=0; i < this.tasks.length; i++) {
      if(item.id == this.tasks[i].id) {
        if(this.tasks[i].strike) {
          this.tasks[i].strike = false;
        }
        else {
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
