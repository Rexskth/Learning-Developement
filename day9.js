//getStaticProps() is used to fetch data at build time

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// on running this function you are telling nextjs that fetch me data at build time
// and pass it as props to the component
// this is useful for static generation of pages where data does not change often

export default function Page({ posts }) {
  return (
    <div>
      <h1>Static Generation with Data Fetching</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
// This page will be statically generated at build time with the fetched posts data
// and will be served as a static HTML file


// on running this Page component the nextjs will pass the returned props from getStaticProps
// to the Page component, allowing you to render the posts data in the component
// This is useful for pages that need to display data that doesn't change often,



