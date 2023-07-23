import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './header/Nav';
import Content from './main/Content';
import SectionOne from './main/SectionOne';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SectionOne />
      <Footer />
    </div>
  );
}

export default App;
