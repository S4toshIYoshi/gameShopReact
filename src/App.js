import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './header/Nav';
import Content from './main/Content';
import SectionOne from './main/SectionOne';
import SectionTwo from './main/SectionTwo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
