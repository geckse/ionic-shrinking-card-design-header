import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-bar-context',
  templateUrl: './header-bar-wrapper.html',
  styleUrls: ['./header-bar-wrapper.scss'],
})
export class HeaderBarWrapperComponent implements OnInit {

  @Input() header: string;
  @Input() subHeader: string;

  constructor() { }

  ngOnInit() { }

}
