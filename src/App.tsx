import './App.css';
import LoginForm from './view/login/form.jsx'
import NotFound from './view/notfound/notfound.jsx'
import ReportView from './view/report/reportView.jsx'
import Header from './view/header/header.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Header></Header>
				<Routes>
					<Route path="/login" element={<LoginForm />}/>
					<Route path="/report/:slug" element={<ReportView />}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
