import AOS from '../node_modules/aos/dist/aos';
import '../node_modules/aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  AOS.init();

  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
