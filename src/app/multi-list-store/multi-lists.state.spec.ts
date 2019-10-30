import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { MultiListState } from './multi-lists.state';
import { CreateList } from './multi-lists.actions';
import { CreateListData } from './models/create-list-data';

describe('MultiLists actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MultiListState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {    
    const createListData = new CreateListData("test", "testDescr", new Date(0));
    store.dispatch(createListData);
    store.select(state => state.multiLists.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ createListData ]));
    });
  });

});
