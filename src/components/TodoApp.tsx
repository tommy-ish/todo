import { useTodos } from '../hooks/useTodos';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { CheckSquare } from 'lucide-react';

export const TodoApp = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckSquare className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
          </div>

          <TodoForm onAddTodo={addTodo} />

          <div className="mt-6 mb-4 flex gap-4 text-sm text-gray-600">
            <span>
              Active: <strong className="text-blue-600">{activeCount}</strong>
            </span>
            <span>
              Completed: <strong className="text-green-600">{completedCount}</strong>
            </span>
            <span>
              Total: <strong className="text-gray-800">{todos.length}</strong>
            </span>
          </div>

          <div className="mt-6">
            <TodoList
              todos={todos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
