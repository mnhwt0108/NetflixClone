import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Watch from './pages/watch/watch';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './app.scss';

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/register" exact element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" exact element={!user ? <Login /> : <Navigate to="/" />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route path="/watch" element={<Watch/>} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
