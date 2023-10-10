import { useContext } from 'react';
import { PostsContext } from './PostContext';
import { TContextValue } from '../../types';

export function usePosts (): TContextValue {
	const context = useContext(PostsContext);

	if(context === undefined)
		throw new Error('use PostsContext outside the provider');

	return context;
}