import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private api: ApiService) {}

  sideBarData: any = {};

  ngOnInit(): void {
    this.api.getSidebarMenu().subscribe({
      next: (res) => {
        this.sideBarData = res;
      },
      error: (err) => {
        alert('Error while fetching the Records!');
      },
    });
  }
}
