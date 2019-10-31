import { Assignee } from './assignee';

export class ToDoItem {
  id: number;
  ownerListId: number;
  description: string;
  dueDate: Date;
  assignee: Assignee;
  isResolved: boolean;
}
