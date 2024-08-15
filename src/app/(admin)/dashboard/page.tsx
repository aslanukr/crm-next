import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface DashboardPageProps {}

export default function Dashboard({}: DashboardPageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
