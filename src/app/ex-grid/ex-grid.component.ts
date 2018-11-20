import {
  Component,
  ViewChild,
} from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from './data';

@Component({
  selector: 'app-ex-grid',
  templateUrl: './ex-grid.component.html',
  styleUrls: ['./ex-grid.component.scss']
})
export class ExGridComponent {
  data = athletesData;

  @ViewChild('mygrid')
  mygrid: IgxGridComponent;
}
