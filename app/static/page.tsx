import React from 'react';
import ServerComponentWithChildren from '../../components/server/serverComponentWithChildren';

const Test = () => {
  return (
    <div className='main'>
      <p>This page is a server component</p>
      {/* @ts-expect-error Server Component */}
      <ServerComponentWithChildren />
    </div>
  );
};
export default Test;
