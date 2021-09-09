import { Component } from '@angular/core';
import Profile, { profiles } from './profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-spencer';
  profiles: Profile[] = profiles;

  onSquareSelect(location: string){
    console.log(location);
  }
}
