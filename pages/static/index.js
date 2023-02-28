export default function staticPage({time}) {
  return <div>{time}</div>
}

export async function getStaticProps() {
  return {props: {time: new Date().toISOString()}, revalidate: 3}
}