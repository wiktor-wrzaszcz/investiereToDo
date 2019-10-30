import { CreateListData } from './models/create-list-data';

export class CreateList {
  static readonly type = '[MultiList] Add item';
  constructor(public payload: CreateListData) { }
}
