const sleep = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms));
async function getData() {
  await sleep(2000);
  const res = await fetch('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10000&count=1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ServerOnly() {
  const data = await getData();
  return (
    <div className='server-wrapper'>
      <p> This is a server component that fetch a random number and display data at build time.</p>
      <small>
        If you reload the page data will be the same. This behaviour can be compared to getStaticProps without
        revalidate time.
      </small>
      <pre>Random number fetched : {JSON.stringify(data)}</pre>
    </div>
  );
}
