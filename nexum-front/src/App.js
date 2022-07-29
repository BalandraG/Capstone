import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Sign-Up" element={<SignUp />}/>
        <Route path="/Sign-In" element={<SignIn />}/>
      </Routes>
    </PageWrapper>
  );
}

export default App;
