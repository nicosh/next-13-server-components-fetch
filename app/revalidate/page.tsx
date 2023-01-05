import React from 'react';
import ServerOnlyWithRevalidate from '../../components/server/serverOnlyWithRevalidate';

const Test = () => {
  return (
    <div className='main'>
      <p>This page is a server component</p>
      {/* @ts-expect-error Server Component */}
      <ServerOnlyWithRevalidate />
    </div>
  );
};
export default Test;
