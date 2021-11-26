import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import ArtGridView from './components/art/views/ArtGridView';
import ArtDetailView from './components/art/views/ArtDetailView';
import ArtCreateForm from './components/art/forms/ArtCreateForm';
import UserGridView from './components/user/views/UserGridView';
import UserDetailView from './components/user/views/UserDetailView';
import UserProfileView from './components/user/views/UserProfileView';
import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ChatNotification from './components/chat/ChatNotification';
import UserArts from './components/user/views/UserArts';
import AccountSettings from './components/user/views/AccountSettings';

let persistor = persistStore(store)

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
              <Route path="/art" element={<ArtGridView />} />
              <Route path="/art/create" element={<ArtCreateForm />} />
              <Route path="art/:artId" element={<ArtDetailView />} />
              <Route path="user/:userId" element={<UserDetailView />} />
              <Route path="/users" element={<UserGridView />} />
              <Route path="/profile" element={<UserProfileView />} />
              <Route path="/notification" element={<ChatNotification />} />
              <Route path="/user/arts" element={<UserArts />} />
              <Route path="/setting" element={<AccountSettings />} />
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
