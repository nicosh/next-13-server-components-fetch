async function gestaticData() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(`https://www.randomnumberapi.com/api/v1.0/random?min=1&max=1000&count=1`, {
    cache: 'force-cache',
  });
  if (!staticData.ok) {
    throw new Error('Failed to fetch data');
  }

  //console.log(`staticData ${staticData.json()}`);
  return staticData.json();
}

async function getsdynamicData() {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://www.randomnumberapi.com/api/v1.0/random?min=1001&max=2000&count=1`, {
    cache: 'no-store',
  });
  if (!dynamicData.ok) {
    throw new Error('Failed to fetch data');
  }

  // console.log(`dynamicData${dynamicData.json()}`);
  return dynamicData.json();
}

async function getrevalidatedData() {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const revalidatedData = await fetch(`https://www.randomnumberapi.com/api/v1.0/random?min=2001&max=3000&count=1`, {
    next: { revalidate: 1 },
  });
  if (!revalidatedData.ok) {
    throw new Error('Failed to fetch data');
  }

  //console.log(`revalidatedData ${revalidatedData.json()}`);
  return revalidatedData.json();
}

export default async function Page() {
  const staticData = await gestaticData();
  const dynamicData = await getsdynamicData();
  const revalidatedData = await getrevalidatedData();

  return (
    <div>
      <pre>This request should be cached until manually invalidated. : {JSON.stringify(staticData)}</pre>
      <pre>This request should be refetched on every request. : {JSON.stringify(dynamicData)}</pre>
      <pre>This request should be cached with a lifetime of 1 seconds. : {JSON.stringify(revalidatedData)}</pre>
    </div>
  );
}
