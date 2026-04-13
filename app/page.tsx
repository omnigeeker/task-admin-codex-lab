import Link from 'next/link';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'task_admin_user';

export default async function HomePage() {
  const cookieStore = await cookies();
  const username = cookieStore.get(SESSION_COOKIE)?.value;

  return (
    <main>
      <div className="card">
        <h1>Task Admin Lab</h1>
        <p>Minimal scaffold in progress.</p>
        <p>{username ? `Current session: ${username}` : 'No active session yet.'}</p>
        <div className="links">
          <Link className="link" href="/login">
            Go to Login
          </Link>
          <Link className="link" href="/tasks">
            Go to Tasks
          </Link>
        </div>
      </div>
    </main>
  );
}
