import fetch from 'isomorphic-unfetch'

export default function Name({ user, time }) {
  const username = user && user.name;
  return <div>
    {username}
    {time}
  </div>
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    // const user = await res.json();
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString()}}
    }
    return {props: {time: new Date().toLocaleDateString()}}
  } catch (e) { 
    console.log(e)
    return { props: { time: new Date().toISOString() } };
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'hi2102' } }],
    fallback: true
  }
}