'use client';

export default function ClientComponent({ children }: any) {
  return (
    <div className='client-wrapper'>
      <p>This is a client component that have childrens</p>
      {children}
    </div>
  );
}
