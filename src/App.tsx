import { useEffect, useState } from 'react';

import Header from './components/Header';
import Archive from './components/Archive';
import Footer from './components/Footer';
import Main from './components/Main';
import { PostsProvider } from './context/PostsContext';

function App() {
	const [isFakeDark, setIsFakeDark] = useState(false);

	// Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
	useEffect(
		function () {
			document.documentElement.classList.toggle('fake-dark-mode');
		},
		[isFakeDark]
	);

	return (

		<section>
			<button
				onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
				className='btn-fake-dark-mode'
			>
				{isFakeDark ? '☀️' : '🌙'}
			</button>

			<PostsProvider>
				<Header />
				<Main />
				<Archive />
				<Footer />
			</PostsProvider>
		</section>
	);
}

export default App;
