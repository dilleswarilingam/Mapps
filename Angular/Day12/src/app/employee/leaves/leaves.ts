import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-leaves',
  imports: [CommonModule],
  templateUrl: './leaves.html',
  styleUrl: './leaves.css',
})
export class Leaves {
  status:string[]=["All","Approved","Rejected","Submitted","Draft"];
}
