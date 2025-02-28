import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
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
      <Nav />
      <div className="container mx-auto font-medium xl:text-lg">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
