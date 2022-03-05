import { Meteor } from 'meteor/meteor';
import { TasksCollection} from '../imports/api/TasksCollection';

const insertTask = text => TasksCollection.insert({ text })

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
})
