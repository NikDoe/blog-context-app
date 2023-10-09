import { TPost } from '../types';
import List from './List';

type PostsProps = {
	posts: TPost[];
}

function Posts({ posts }: PostsProps) {
	return (
		<section>
			<List posts={posts} />
		</section>
	);
}

export default Posts;