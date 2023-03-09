import {Suspense} from 'react';
import './styles/index.scss';
import {MainPage} from 'pages/MainPage';

function App() {
	return (
		<Suspense fallback={<div>Загрузка</div>}>
			<div className='App'>
				<MainPage />
			</div>
		</Suspense>
	);
}

export default App;
