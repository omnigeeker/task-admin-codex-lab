import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { seedTasks } from '@/lib/tasks-store';

const SESSION_COOKIE = 'task_admin_user';

export default async function TasksPage() {
  const cookieStore = await cookies();
  const username = cookieStore.get(SESSION_COOKIE)?.value;

  if (!username) {
    redirect('/login');
  }

  return (
    <main>
      <div className="card">
        <h1>Tasks</h1>
        <p>Signed in as: {username}</p>
        <ul>
          {seedTasks.map((task) => (
            <li key={task.id}>
              {task.title} — <strong>{task.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
