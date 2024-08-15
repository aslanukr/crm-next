'use client';
import Button from '@/app/components/button';
import React from 'react';

export interface ErrorComponentProps {
  reset: () => void;
  error: Error;
}
export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong : ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
