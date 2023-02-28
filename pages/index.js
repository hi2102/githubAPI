import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('')
	
  return (
		<div>
			<label>
				username : 
				<input value={username} onChange={e=>{setUsername(e.target.value)}}/>
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}><button>검색하기</button></Link>
		</div>
	);
}