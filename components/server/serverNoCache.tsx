const sleep = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms));
async function getData() {
  await sleep(2000);
  const res = await fetch('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10000&count=1', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ServerNoCache() {
  const data = await getData();
  return (
    <div className='server-wrapper'>
      <p> This is a server component that fetch a random number and display data at request time (Dynamic).</p>
      <small>
        If you reload the page data will always change. This behaviour can be compared to getServerSideProps.
      </small>
      <pre>Random number fetched : {JSON.stringify(data)}</pre>
    </div>
  );
}
