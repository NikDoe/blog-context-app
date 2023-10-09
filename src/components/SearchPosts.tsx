import { Dispatch, SetStateAction } from 'react';

type SearchPostsProps = {
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
}

function SearchPosts(props: SearchPostsProps) {
	const {
		searchQuery,
		setSearchQuery
	} = props;

	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}

export default SearchPosts;