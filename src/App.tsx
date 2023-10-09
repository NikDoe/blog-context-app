import { createContext, useEffect, useState } from 'react';
import { TContextValue, TPost } from './types';
import { createRandomPost } from './utils';

import Header from './components/Header';
import Archive from './components/Archive';
import Footer from './components/Footer';
import Main from './components/Main';

const defaultContextValue: TContextValue = {
	posts: [],
	onAddPost: () => {},
	onClearPosts: () => {},
	searchQuery: '',
	setSearchQuery: () => {}
};

export const PostContext = createContext<TContextValue>(defaultContextValue);

function App() {
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost())
	);
	const [searchQuery, setSearchQuery] = useState('');
	const [isFakeDark, setIsFakeDark] = useState(false);

	// Derived state. These are the posts that will actually be displayed
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

	// Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
	useEffect(
		function () {
			document.documentElement.classList.toggle('fake-dark-mode');
		},
		[isFakeDark]
	);

	const contextValue: TContextValue = {
		posts: searchedPosts,
		onAddPost: handleAddPost,
		onClearPosts: handleClearPosts,
		searchQuery,
		setSearchQuery,
	};

	return (
		<PostContext.Provider
			value={contextValue}
		>
			<section>
				<button
					onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
					className='btn-fake-dark-mode'
				>
					{isFakeDark ? '☀️' : '🌙'}
				</button>

				<Header />
				<Main />
				<Archive />
				<Footer />
			</section>
		</PostContext.Provider>
	);
}

export default App;
