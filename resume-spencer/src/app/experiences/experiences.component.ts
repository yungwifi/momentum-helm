import {
  ElementRef,
  Component,
  ContentChild,
  Input,
  OnInit,
  AfterContentInit,
} from '@angular/core';
import { ProfilesService } from '../profiles.services';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, AfterContentInit {
  @Input() profile!: number;

  @ContentChild('morestuff') morestuff!: ElementRef;

  newExperience: string = '';

  constructor(public profilesService: ProfilesService) {}

  ngOnInit() {
    console.log(' ng on init');
    console.log(this.morestuff);
  }

  ngAfterContentInit() {
    console.log(' ng after content init');
    console.log(this.morestuff);
  }

  get experience() {
    return this.profilesService.getProfile(this.profile).experience;
  }

  onNewExperience() {
    this.profilesService.addExperience(this.profile, this.newExperience);
  }
}