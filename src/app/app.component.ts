import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scroll-issue';

  private _items: any;

  set items(items) {
    this._items = items;
  }
  get items() {
    return this._items;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((res) => {
      this.items = res;
    });
  }
}
