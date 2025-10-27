// types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  balance: number;
}

export interface Transaction {
  id: string;
  user: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface StatsCard {
  title: string;
  value: string;
  change: number;
  description: string;
}