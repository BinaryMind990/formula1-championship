import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import Navigation from './components/Layout/Navigation';
import { FlagProvider } from './contexts/FlagContext';
import { YearProvider } from './contexts/YearContext';
import BackToTop from './components/UI/BackToTop/BackToTop';

function App() {
	return (
		<Router>
			<FlagProvider>
				<YearProvider>
					<div className='page-layout'>
						<Navigation />
						<AppRoutes />
						<BackToTop />
					</div>
				</YearProvider>
			</FlagProvider>
		</Router>
	);
}
export default App;
