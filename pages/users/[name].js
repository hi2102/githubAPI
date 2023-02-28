import Profile from '@/components/Profile'
import fetch from 'isomorphic-unfetch'

export default function Name({ user, repos }) {
	
	console.log('user :', user);
	console.log('repos : ', repos);
	if (!user) {
		return null;
	}
	return (
		<div className='flex p-10'>
			<Profile user={user} />
			<div className='w-full h-full overflow-scroll py-8'>
				<div className='px-8 text-sm border-b'>
					Repositories
					<span className='inline px-1 ml-2 text-sm text-white decoration-[#586069] bg-gray-400 rounded-full'>
						{user.public_repos}
					</span>
				</div>
				{/* repos list */}
				{user &&
					repos &&
					repos.map((repo) => ( cosnole.log(repo)
						// <div key={repo.id} className='w-full border-b py-12'>
						// 	<a
						// 		target='_blank'
						// 		rel='noreferrer'
						// 		href={`https://github.com${user.login}/${user.name}`}
						// 	>
						// 		<h2 className='m-0 text-10 inline cursor-pointer'>
						// 			{repo.name}
						// 		</h2>
						// 	</a>
						// 	<div className='m-0 text-[14px]'>{repo.description}</div>
						// 	<div className='m-0 text-sm'>
						// 		{repo.language}
						// 		<span className='ml-10'></span>
						// 	</div>
						// </div>
					))}
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { name } = query;
	try {
		const res = await fetch(`https://api.github.com/users/${name}`);
		if (res.status === 200) {
			const user = await res.json();
			return { props: { user } };
		} 
		return { props: {} };
	} catch (e) {
		console.log(e);
		return { props: {} };
	}
}

