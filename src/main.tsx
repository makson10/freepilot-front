import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/home';
import SignUpPage from './pages/signup';
import LogInPage from './pages/login';
import './styles/index.css';
import './styles/variables.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />

				<Route element={<Layout />}>
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/login" element={<LogInPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

