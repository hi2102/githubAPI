import { GoOrganization,	GoLink,	GoLocation } from 'react-icons/go';
import { CgTwitter } from 'react-icons/cg';
import Image from 'next/image';

export default function Profile({ user }) {
	if (!user) {
		return null;
	}
	return (
		<div className='w-[280px] mr-7 m-2'>
			<div className='w-full rounded-full'>
				<Image
					className='block w-full rounded-full'
					src={user.avatar_url}
					alt={`${user.name} 프로필 이미지`}
					width={100}
					height={100}
					priority
				/>
			</div>
			<p className='m-0 pt-12 text-2xl'>{user.name}</p>
			<p className='m-0 text-xl'>{user.login}</p>
			<p className='m-0 text-sm'>{user.bio}</p>
			<div className='flex items-center mt-2'>
				<GoLocation size={16} color='#6a737d' />
				<span className='ml-3 '>{user.location}</span>
			</div>
			<div className='flex items-center mt-2'>
				<CgTwitter size={20} color='#6a737d' />
				<div className='ml-3 text-sm	break-all'>
					<span>{user.twitter_username}</span>
				</div>
			</div>
			<div className='flex items-center mt-2'>
				<GoOrganization size={16} color='#6a737d' />
				<div className='ml-3'>
					<span className='flex items-center text-[4px]'>
						{user.organizations_url}
					</span>
				</div>
			</div>
			<div className='flex items-center mt-2'>
				<GoLink size={16} color='#6a737d' />
				<span className='ml-3'>{user.blog}</span>
			</div>
		</div>
	);
}