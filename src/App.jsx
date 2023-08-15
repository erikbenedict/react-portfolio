import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const navbarHeight = document.querySelector('#navbar').offsetHeight;
    const links = document.querySelectorAll('.nav-offset');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId === '#') {
          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const targetPosition = targetElement.offsetTop;

            window.scrollTo({
              top: targetPosition - navbarHeight,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto font-medium xl:text-lg">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
