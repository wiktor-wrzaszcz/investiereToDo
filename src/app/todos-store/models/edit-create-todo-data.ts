import { Assignee } from '../../models/assignee';

export class EditCreateTodoData {
  constructor(public ownerListId: number,
              public description: string,
              public dueDate: Date,
              public assignee: Assignee,
              public isResolved: boolean) {}
}
