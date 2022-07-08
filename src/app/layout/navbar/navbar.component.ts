import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() options: any[] = [];
  @Output() select: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelect(option: any) {
    this.select.emit(option);
  }
}
