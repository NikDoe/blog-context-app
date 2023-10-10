import { ReactNode, useState } from 'react';
import { PostsContext } from './PostContext';
import { TContextValue, TPost } from '../../types';
import { createRandomPost } from '../../utils';

type PostsProviderProps = {
	children: ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost())
	);
	const [searchQuery, setSearchQuery] = useState('');

	const searchedPosts = 
		searchQuery.length > 0 
			? posts.filter((post) =>
				`${post.title} ${post.body}`
					.toLowerCase()
					.includes(searchQuery.toLowerCase())
			)
			: posts;

	function handleAddPost(post: TPost) {
		setPosts((posts) => [post, ...posts]);
	}
		
	function handleClearPosts() {
		setPosts([]);
	}

	const contextValue: TContextValue = {
		posts: searchedPosts,
		onAddPost: handleAddPost,
		onClearPosts: handleClearPosts,
		searchQuery,
		setSearchQuery,
	};
	
	return (
		<PostsContext.Provider
			value={contextValue}
		>
			{children}
		</PostsContext.Provider>
	);
}