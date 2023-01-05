import React from 'react';
import ServerOnly from '../../components/server/serverOnly';
import ServerOnlyWithRevalidate from '../../components/server/serverOnlyWithRevalidate';
import ServerNoCache from '../../components/server/serverNoCache';
import ClientComponent from '../../components/client/wrapper';
import ServerComponentWithChildren from '../../components/server/serverComponentWithChildren';
const Test2 = () => {
  return (
    <div className='main'>
      <p>This page is a server component</p>
      {/* @ts-expect-error Server Component */}
      <ServerNoCache />
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
export default Test2;
