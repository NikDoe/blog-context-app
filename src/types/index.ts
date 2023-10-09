import { Dispatch, SetStateAction } from 'react';

export type TPost = {
    title: string;
    body: string;
}

export type TContextValue = {
	posts: TPost[];
	onAddPost: (post: TPost) => void;
	onClearPosts: () => void;
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
}