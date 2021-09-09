import { Component } from '@angular/core';
import {profiles} from './profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-spencer';
  profiles = profiles;

  onSquareSelect(location: string){
    console.log(location);
  }
}
