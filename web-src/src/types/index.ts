export interface Sequent {
  id: string;
  antecedent: string[];
  consequent: string[];
}

export interface ProofStep {
  id: string;
  rule: string;
  sequent: Sequent;
  description: string;
}

export interface Proof {
  id: string;
  title: string;
  description: string;
  steps: ProofStep[];
  createdAt: Date;
  updatedAt: Date;
  status: 'in-progress' | 'completed' | 'abandoned';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  proofs: Proof[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}
