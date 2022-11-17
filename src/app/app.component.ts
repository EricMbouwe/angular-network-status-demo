import { Component } from '@angular/core';
import { fromEvent, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onlineEvent$!: Observable<Event>;
  offlineEvent$!: Observable<Event>;

  isOnline$!: Observable<any>;
  isOffline$!: Observable<any>;

  onlineStatusMessage!: string;
  onlineStatus!: string;

  title = 'Network status demo';

  constructor() { }

  ngOnInit(): void {
    this.onlineEvent$ = fromEvent(window, 'online');
    this.offlineEvent$ = fromEvent(window, 'offline');

    this.isOnline$ = this.onlineEvent$.pipe(
      tap(e => {
        this.onlineStatus = e.type;
        this.onlineStatusMessage = 'Vous êtes de retour en ligne !';
        console.log('Online...');
      })
    )

    this.isOffline$ = this.offlineEvent$.pipe(
      tap(e => {
        this.onlineStatus = e.type;
        this.onlineStatusMessage = "Vous n'êtes pas connecté à Internet. Vérifiez votre connexion.";
        console.log('Offline...');
      })
    )
  }
}
