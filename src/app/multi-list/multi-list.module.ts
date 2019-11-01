import { NgModule } from '@angular/core';

import { MultiListRoutingModule } from './multi-list-routing.module';
import { MultiListComponent } from './multi-list.component';
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
    MultiListRoutingModule
  ],
  entryComponents: [CreateNewListDialogComponent]
})
export class MultiListModule { }
