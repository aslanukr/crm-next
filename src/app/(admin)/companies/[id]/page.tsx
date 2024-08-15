'use client';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface CompanyPageProps {
  params: { id: string };
}

export default function Companies({ params }: CompanyPageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies({params.id})</Header>
    </>
  );
}
