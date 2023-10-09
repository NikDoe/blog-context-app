import { Dispatch, SetStateAction } from 'react';
import { TPost } from '../types';

import Results from './Results';
import SearchPosts from './SearchPosts';

type HeaderProps = {
	posts: TPost[];
	onClearPosts: () => void;
	searchQuery: string;
	setSearchQuery:Dispatch<SetStateAction<string>>;
}

function Header(props: HeaderProps) {
	const { 
		posts, 
		onClearPosts, 
		searchQuery, 
		setSearchQuery 
	} = props;

	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results posts={posts} />
				<SearchPosts
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}

export default Header;