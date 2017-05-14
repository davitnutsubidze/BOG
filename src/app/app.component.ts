import { Component } from '@angular/core';
import {IndexedDBService} from './shared/services/indexeddb'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private indexedDBService: IndexedDBService)
  {
    this.indexedDBService.create();
  }
}
