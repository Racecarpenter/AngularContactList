import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts = [
    {
      name: 'Jesus',
      email: 'jesuscarpentry@bullshit.com',
      phone: '4805325867'
    },
    {
      name: 'Shitball Jones',
      email: 'shitball@herbalife.com',
      phone: '3244322432'
    },
    {
      name: 'Habitual Line Stepper',
      email: 'thelovingmonkey@dumb.com',
      phone: '7777777777'
    }
  ];
  addContact(name, email, phone) {
    this.contacts.unshift({name, email, phone})
  }
}
