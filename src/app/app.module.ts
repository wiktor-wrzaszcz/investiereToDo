import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from './shared/shared.module';
import { MultiListState } from './root-states/multi-list-store/multi-list.state';
import { UsersState } from './root-states/users-store/users.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    // This is our "deepest" state, which is shared with other modules -
    // therefore we register module synchronoulsy in routing, and register state for root
    NgxsModule.forRoot([
      MultiListState,
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
