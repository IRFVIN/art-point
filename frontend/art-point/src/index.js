import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import ArtDetailView from './components/art/views/ArtDetailView';
import ArtCreateForm from './components/art/forms/ArtCreateForm';
import UserDetailView from './components/user/views/UserDetailView';
import UserProfileView from './components/user/views/UserProfileView';
import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ChatNotification from './components/chat/ChatNotification';
import UserArts from './components/user/views/UserArts';
import AccountSettings from './components/user/views/AccountSettings';
import ArtPageView from './components/art/views/ArtPageView';
import CategoryPageView from './components/category/views/CategoryPageView';
import SellerPageView from './components/seller/SellerPageView';
import CategoryGridView from './components/category/views/CategoryGridView';

let persistor = persistStore(store)
let server_url = "http://localhost:8080/";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/art" element={<ArtPageView baseURL="http://localhost:8080/arts?" />} />
              <Route path="/categories" element={<CategoryGridView />} />
              <Route path="/category/:categoryId" element={<CategoryPageView />} />
              <Route path="/art/create" element={<ArtCreateForm />} />
              <Route path="art/:artId" element={<ArtDetailView />} />
              <Route path="user/:userId" element={<UserDetailView />} />
              <Route path="/sellers" element={<SellerPageView baseURL={server_url + "sellers"} />} />
              <Route path="/sellers/featured" element={<SellerPageView baseURL={server_url + "sellers"} />} />
              <Route path="/sellers/rated" element={<SellerPageView baseURL={server_url + "sellers/rated"} />} />
              <Route path="/profile" element={<UserProfileView />} />
              <Route path="/notification" element={<ChatNotification />} />
              <Route path="/user/:userId/arts" element={<UserArts />} />
              <Route path="/setting" element={<AccountSettings baseURL={server_url + "user"} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
