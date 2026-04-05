export interface Week {
  id: number;
  phase: number;
  label: string;
  date: string;
  tags: string[];
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
