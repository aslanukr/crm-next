import Header from '@/app/components/header';
import React from 'react';

export interface DashboardPageProps {}

export default function Dashboard({}: DashboardPageProps) {
  return (
    <main>
      <Header>Dashboard</Header>
    </main>
  );
}
