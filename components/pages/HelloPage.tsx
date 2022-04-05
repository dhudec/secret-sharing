import React from 'react';
import { useRouter } from 'next/router';

export const HelloPage = () => {
  const router = useRouter();
  const id = router.query.id ?? 'd4bb595f-802b-497b-b4cc-c3cba6c96d01';
  return <h1>Hello {id}</h1>;
};
