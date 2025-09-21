import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
// ng g c nombrecomponente --skip-tests --inline-template --inline-style --flat
