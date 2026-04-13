import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    tasks: [],
    message: 'Placeholder tasks API route. No database is connected yet.'
  });
}
