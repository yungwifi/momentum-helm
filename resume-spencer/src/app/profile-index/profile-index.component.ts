import { Component, Input } from '@angular/core';
import { ProfilesService } from '../profiles.services';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss']
})
export class ProfileIndexComponent {

  constructor(public profilesService: ProfilesService) {}

}
