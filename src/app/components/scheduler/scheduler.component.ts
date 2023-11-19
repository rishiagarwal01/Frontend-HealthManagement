import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-scheduler',
  template: '<ejs-schedule  margin-top="20" height="1000" width="1500"  [eventSettings]="eventSettings" [currentView]="setView"></ejs-schedule>',
  // templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  public setView: View ='Month';
  private dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
 });
 public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
}
