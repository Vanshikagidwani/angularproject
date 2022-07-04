import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  constructor(){
    setTimeout(() => {
      this.title="changed title";
      
    }, 5000);
  }
}
