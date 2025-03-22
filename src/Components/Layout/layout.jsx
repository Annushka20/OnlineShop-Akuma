import { Outlet } from 'react-router-dom';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';

const Layout = () => {
  return (
    <section>
      <Nav />
      <Outlet /> 
      <Footer />
    </section>
  );
};

export default Layout;