import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div className="card">
        <h1>Task Admin Lab</h1>
        <p>This is the minimal scaffold for Phase 1.</p>
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
