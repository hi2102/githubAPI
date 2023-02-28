import Link from 'next/link';

export default function Tomato() {
	return (
		<main>
			<h1>hello world!</h1>
			<h2>Link to &rsquo;/home&rsquo;</h2>
			<Link href='/'>
				<button>move to &rsquo;/home&rsquo;</button>
			</Link>
		</main>
	);
}
