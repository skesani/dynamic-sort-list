import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import {RouterModule} from '@angular/router';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicListComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: DynamicListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
