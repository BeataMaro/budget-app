import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../../theme';

export default function Layout() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
