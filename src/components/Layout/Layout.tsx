import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.tsx';
import Footer from '../Footer/Footer.tsx';
import Wrapper from '../../StyledWrapper.tsx';

export default function Layout() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
