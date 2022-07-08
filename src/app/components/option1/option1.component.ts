import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.scss'],
})
export class Option1Component implements OnInit {
  constructor(private dataService: DataSourceService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      console.log('loaded results', res);
    });
  }
}
