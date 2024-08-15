import Header from '@/app/components/header';
import React from 'react';

export interface CompanyPageProps {
  params: { id: string };
}

export default function Companies({ params }: CompanyPageProps) {
  return (
    <>
      <Header>Companies({params.id})</Header>
    </>
  );
}
