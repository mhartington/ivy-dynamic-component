import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html'
})
export class UserItemComponent implements OnInit {
  @Input() user: any;
  ngOnInit() {}
}
