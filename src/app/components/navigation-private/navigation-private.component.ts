import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-private',
  templateUrl: './navigation-private.component.html',
  styleUrls: ['./navigation-private.component.css']
})
export class NavigationPrivateComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit(): void {
  }

}
