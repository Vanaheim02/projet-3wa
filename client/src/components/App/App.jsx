import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import '../../styles/_index.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homepage/homepage';
import CalendarComponent from '../calendar/calendar';
import FilterComponent from '../filter/filter';
import SignInForm from '../sign-in/sign-in';
import store from '../../Redux/store.js';
import { Provider } from 'react-redux';


function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/calendar" element={<CalendarComponent />} />
					<Route path="/sign-in" element={
						<Provider store={store}>
							<SignInForm />
						</Provider>
					} />
					<Route path="/filter" element={<FilterComponent />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App
