import { Route, Routes } from 'react-router-dom';

import MusicPlayer from './pages/MusicPlayer/MusicPlayer';
import SearchBar from './components/SearchBar';

import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import ToDoList from './components/ToDoList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/auth/ForgotPassword';
import UpdateProfile from './components/auth/UpdateProfile';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  return (

      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
          <Route path='/searchbar' element={<SearchBar />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

          <Route path="/portfolio/todolist"

            element={
              <PrivateRoute>
                <ToDoList />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/portfolio/musicplayer"

            element={
              <PrivateRoute>
                <MusicPlayer />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/portfolio/musicplayer/update-profile"

            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          ></Route>


          <Route path='/portfolio/sign-up' element={<SignUp />}></Route>
          <Route path='/portfolio/log-in' element={<Login />}></Route>
          <Route path='/portfolio/my-resume' element={<Resume />}></Route>
          <Route path='/portfolio/forgot-password' element={<ForgotPassword />}></Route>
        </Routes>
      </AuthProvider>


  );
}

export default App;
