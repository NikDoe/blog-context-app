import { TPost } from '../types';

type ResultsProps = {
	posts: TPost[];
}

function Results({ posts }:ResultsProps) {
	return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;