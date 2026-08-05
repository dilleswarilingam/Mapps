import { Component,EventEmitter,Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
constructor(public service:AuthService){};

@Output()
toggle= new EventEmitter<void>();

Signout(){
  this.service.logout();
}
}
