import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'task_admin_user';

export async function POST(req: Request) {
  const body = (await req.json()) as { username?: string };
  const username = body.username?.trim();

  if (!username) {
    return NextResponse.json({ error: 'Username is required.' }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, username, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/'
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });

  return response;
}
