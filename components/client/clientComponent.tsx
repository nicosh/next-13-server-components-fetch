'use client';

import { useState } from 'react';

type Counter = {
  n: number;
};
export default function ClientComponent({ n }: Counter) {
  const [count, setCount] = useState(n || 0);
  if (!n) {
    return <p>Loading...</p>;
  }
  return (
    <div className='client-wrapper'>
      <p>This is a client component with a counter :D</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
