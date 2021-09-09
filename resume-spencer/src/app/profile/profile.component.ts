import { Component, Input, OnInit } from '@angular/core';
import Profile from '../profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profiles!: Profile;
  @Input() name!: string

  constructor() { }

  ngOnInit(): void {
  }

}
