import {Routes, Route} from "react-router-dom";
import '../styles/normalize.css';
import '../styles/App.css';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageForm from '../pages/PageForm';
import PageSwipeCard from '../pages/PageSwipeCard';
import PageProfile from '../pages/PageProfile';


function App() {
  return (
      <div className="wrapper">
        <Header title='MatchaPaw' />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="form" element={<PageForm />} />
          <Route path="swipe" element={<PageSwipeCard />} />
          <Route path="profile" element={<PageProfile />} />
        </Routes>
      </div>
  );
}

export default App;
