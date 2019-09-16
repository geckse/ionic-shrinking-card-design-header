import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('pageContent', { read: IonContent, static: true }) content: IonContent;

  /* example of action with the shrinkable header */
  headerBarActions: any;

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 44; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    /* -- actions for the header -- */
    this.headerBarActions = [{
      'title': 'Add'
    }];

  }

  ngOnInit() {
  }
  /* -- receive action of schrinkable header -- */
  saveAction(emittedData){
    console.log('Received data from click on header:',emittedData);
  }
}
