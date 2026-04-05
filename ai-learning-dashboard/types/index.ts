export type TagKey = "cc" | "aa" | "ap" | "fe" | "g";

export interface Week {
  id: number;
  phase: number;
  label: string;
  date: string;
  tags: TagKey[];
}

export interface Phase {
  id: number;
  label: string;
  title: string;
  period: string;
  color: string;
}

export interface Cert {
  name: string;
  issuer: string;
  icon: string;
  weekTarget: number;
}

export type Difficulty = "easy" | "normal" | "hard";
export type TaskAxis = "claude_code" | "academy" | "qualification";

export interface Task {
  axis: TaskAxis;
  title: string;
  description: string;
  duration: string;
  url?: string;
  difficulty: Difficulty;
}

export interface WeekDetail {
  weekId: number;
  prerequisiteWeeks: number[];
  goal: string;
  tasks: Task[];
}
