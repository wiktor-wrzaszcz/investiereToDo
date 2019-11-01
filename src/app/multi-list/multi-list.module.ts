import { NgModule } from '@angular/core';

import { MultiListRoutingModule } from './multi-list-routing.module';
import { MultiListComponent } from './multi-list.component';
import { NgxsModule } from '@ngxs/store';
import { MultiListState } from './multi-list-store/multi-list.state';
import { ListCardComponent } from './list-card/list-card.component';
import { CreateNewListDialogComponent } from './create-new-list-dialog/create-new-list-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MultiListComponent,
    ListCardComponent,
    CreateNewListDialogComponent
  ],
  imports: [
    SharedModule,
    MultiListRoutingModule,
    // This is our "deepest" state, which is shared with other modules -
    // therefore we register module synchronoulsy in routing, and register state for root
    NgxsModule.forRoot([
      MultiListState
    ])
  ],
  entryComponents: [CreateNewListDialogComponent]
})
export class MultiListModule { }
