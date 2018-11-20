import {
  Component,
  HostListener,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from './data';

@Component({
  selector: 'app-ex-grid',
  templateUrl: './ex-grid.component.html',
  styleUrls: ['./ex-grid.component.scss']
})
export class ExGridComponent implements AfterViewInit {
  data = athletesData;

  @ViewChild('mygrid')
  mygrid: IgxGridComponent;

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    console.log(event);
  }

  @HostListener('window:load', ['$event'])
  public onLoad(event) {
    console.log(event);
  }

  public ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.mygrid.height);
  }
}
