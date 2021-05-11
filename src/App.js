import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import contactForm from './pages/contactForm';

function App() {
	return (
		<Router basename={ process.env.PUBLIC_URL }>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/contact" component={contactForm} exact />
			</Switch>
		</Router>
	);
}

export default App;
