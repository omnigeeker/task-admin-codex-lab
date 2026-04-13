export type TaskStatus = 'open' | 'done';

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

export const seedTasks: Task[] = [
  { id: 't1', title: 'Review Phase 2 scaffold', status: 'open' },
  { id: 't2', title: 'Prepare task filtering UI', status: 'done' }
];
