## Getting Started

First, build the application:

```bash
npm run build
# or
yarn build
```

Then, start the server 
```bash
npm run start
# or
yarn start
```

## Testing next 13 fetching strategies in server components

#### Static Data Fetching ✅
 `http://localhost:3000/static`  will render a static page that will  fetch  data at build time. It also includes a client component  (SSR) 
#### Static Data Fetching with revalidate ✅
 `http://localhost:3000/revalidate` will render a static page with revalidate after 1 second (ISR) 
#### Combining components with static data fetching and static data fetching with revalidate ⚠️
 `http://localhost:3000/combined` will render  : 
 - A server component wih static data fetching 
- A server component wih static data fetching and revalidate after 1s
- A server component wih static data fetching and a child client component 
- A client component that has a server component, wih static data fetching and revalidate after 1s, as a child
- A client component that has a server component, wih static data fetching, as a child

⚠️All the components seems to get revalidate after 1S (only first data fetching strategy will be applied)⚠️

#### Combining components with dynamic data fetching and static data fetching ❌
 `http://localhost:3000/combined` will render  : 
- A server component wih dynamic data fetching 
- A server component wih static data fetching 
- A server component wih static data fetching and revalidate after 1s
- A server component wih static data fetching and a child client component 
- A client component that has a server component, wih static data fetching and revalidate after 1s, as a child
- A client component that has a server component, wih static data fetching, as a child

⚠️All the components seems to get revalidate after 1S (only first data fetching strategy will be applied)⚠️
 `http://localhost:3000/combined2` will render a mix of SSR and ISR components 	❌
