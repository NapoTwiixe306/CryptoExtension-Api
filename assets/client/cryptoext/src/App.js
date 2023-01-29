import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
// import NotFound from './components/NotFound';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
