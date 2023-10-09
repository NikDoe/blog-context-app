import { TPost } from '../types';
import FormAddPost from './FormAddPost';
import Posts from './Posts';

type MainProps = {
	posts: TPost[];
	onAddPost: (post: TPost) => void;
}

function Main(props: MainProps) {
	const { 
		posts, 
		onAddPost 
	} = props;

	return (
		<main>
			<FormAddPost onAddPost={onAddPost} />
			<Posts posts={posts} />
		</main>
	);
}

export default Main;