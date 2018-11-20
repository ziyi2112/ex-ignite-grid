import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxGridModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { ExGridComponent } from './ex-grid/ex-grid.component';

@NgModule({
  declarations: [AppComponent, ExGridComponent],
  imports: [BrowserModule, IgxGridModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
