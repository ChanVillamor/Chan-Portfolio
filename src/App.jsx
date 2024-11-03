import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Loading from './components/Loading';
import { Home, About, Resume, Projects, Contact, Footer } from './sections';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>

          {/* nav */}
          <Nav />

          {/* home section */}
          <section className="relative bg-hero bg-no-repeat bg-cover bg-center w-full padding">
            <div className="absolute inset-0 bg-[#101010] opacity-80 z-10"></div>
            <div className="relative z-20">
              <Home />
            </div>
          </section>

          {/* about me section */}
          <section className="padding bg-primary">
            <About />
          </section>

          {/* resume section */}
          <section className="relative bg-resume bg-no-repeat bg-cover bg-center w-full padding">
            <div className="absolute inset-0 bg-[#101010] opacity-80 z-10"></div>
            <div className="relative z-20">
              <Resume />
            </div>
          </section>

          {/* project section */}
          <section className="padding bg-primary">
            <Projects />
          </section>

          {/* contact section */}
          <section className="padding bg-primary">
            <Contact />         
          </section>

          {/* footer section */}
          <section className="padding bg-black opacity-90">
            <Footer />
          </section>
        </main>
        
      )}
    </>
  );
}

export default App;