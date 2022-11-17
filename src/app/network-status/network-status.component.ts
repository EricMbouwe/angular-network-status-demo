import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss']
})
export class NetworkStatusComponent implements OnInit {
  @Input() onlineStatus!: string;
  @Input() onlineStatusMessage!: string;
  @Input() isOnline!: boolean;
  @Input() isOffline!: boolean;

  constructor() { }

  reloadFunction() { }

  ngOnInit(): void {
  }

}
