import React from 'react';
import ServerOnlyWithRevalidate from '../../components/server/serverOnlyWithRevalidate';
import ClientComponent from '../../components/client/wrapper';
import ServerComponentWithChildren from '../../components/server/serverComponentWithChildren';
import ServerOnly from '../../components/server/serverOnly';

const Test = () => {
  return (
    <div className='main'>
      <p>This page is a server component</p>
      {/* @ts-expect-error Server Component */}
      <ServerOnly />
      {/* @ts-expect-error Server Component */}
      <ServerOnlyWithRevalidate />
      {/* @ts-expect-error Server Component */}
      <ServerComponentWithChildren />
      <ClientComponent>
        {/* @ts-expect-error Server Component */}
        <ServerOnlyWithRevalidate />
      </ClientComponent>
      <ClientComponent>
        {/* @ts-expect-error Server Component */}
        <ServerComponentWithChildren />
      </ClientComponent>
    </div>
  );
};
export default Test;
