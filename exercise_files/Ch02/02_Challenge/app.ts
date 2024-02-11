enum TodoItemStatus {
	DONE = 'done',
	IN_PROGRESS = 'in-progress',
	TODO = 'todo'
}

interface TodoItem {
  id: number,
  title: string,
  status: TodoItemStatus,
	completedOn?: Date
}

const todoItems: Array<TodoItem> = [
  { id: 1, title: 'Learn HTML', status: TodoItemStatus.DONE, completedOn: new Date('2021-09-11') },
  { id: 2, title: 'Learn TypeScript', status: TodoItemStatus.IN_PROGRESS },
  { id: 3, title: 'Write the best app in the world', status: TodoItemStatus.IN_PROGRESS },
]

function addTodoItem(todo: string): TodoItem {
  const id = getNextId(todoItems)

  const newTodo: TodoItem = {
    id,
    title: todo,
    status: TodoItemStatus.TODO,
  }

  todoItems.push(newTodo)

  return newTodo
}

function getNextId<T extends { id: number }>(items: Array<T>): number {
  return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem('Buy lots of stuff with all the money we make from the app')

console.log(JSON.stringify(newTodo))
