import { Component } from '@angular/core';


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
