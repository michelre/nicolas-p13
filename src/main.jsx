import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/layout/Layout.jsx';
import Home from './routes/home/Home.jsx';
import User from './routes/user/User.jsx';
import Signin from './routes/signin/Signin.jsx';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </Provider>,
)
