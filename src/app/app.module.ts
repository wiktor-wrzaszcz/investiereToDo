import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './users-store/users.state';
import { SharedModule } from './shared/shared.module';
import { MultiListState } from './multi-list/multi-list-store/multi-list.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NgxsModule.forRoot([
      UsersState
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
