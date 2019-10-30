import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiListComponent } from './multi-list/multi-list.component';
import { MaterialWrapperModule } from './material-wrapper/material-wrapper.module';
import { NgxsModule } from '@ngxs/store';
import { MultiListState } from './multi-list-store/multi-lists.state';
import { AssigneeComponent } from './assignee/assignee.component';
import { SingleListCardComponent } from './multi-list/single-list-card/single-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiListComponent,
    SingleListCardComponent,
    AssigneeComponent
  ],
  imports: [
    NgxsModule.forRoot([
      MultiListState
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
