import { Component, ɵrenderComponent } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ivy-dynamic-component';
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get(`https://randomuser.me/api/`)
      .pipe(map((res: any) => res.results))
      .subscribe(res => {
        this.data = res;
        this.loadComponent();
      });
  }

  async loadComponent() {
    const { UserItemComponent } = await import('./user-item/user-item.component');
    return ɵrenderComponent(UserItemComponent);
  }
}
