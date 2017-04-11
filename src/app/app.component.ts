import {Component, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

export  class Hero {
  id:number;
  name:string;
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}{{name}}</h1>
              <h1>{{title}}</h1>
              <h1>{{hero.name}}</h1>
              <p>{{hero.id}}</p>
              <div>
                <!--<input [(ngModel)]="hero.name"/>-->
                <input [(ngModel)]="hero.name" placeholder="name">
              </div>
            
  `,
})
export class AppComponent  {
                              name = 'Angular';
                              title = 'Tour of Heroes';
                              // hero = 'windstorm';
                            hero:Hero = {
                              id:1,
                              name: 'windstorm',
                            }

}
