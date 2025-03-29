import { Outlet } from 'react-router-dom';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';

const Layout = ({ cartCount }) => {
  return (
    <section>
      <Nav cartCount={cartCount} />
      <Outlet /> 
      <Footer />
    </section>
  );
};

export default Layout;