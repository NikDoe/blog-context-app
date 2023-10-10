import { createContext } from 'react';
import { TContextValue } from '../../types';

const defaultContextValue: TContextValue = {
	posts: [],
	onAddPost: () => {},
	onClearPosts: () => {},
	searchQuery: '',
	setSearchQuery: () => {}
};

export const PostsContext = createContext(defaultContextValue);