import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { Navbar } from '@components/';
import { loginNavBarItems } from '@utils/data';

type Props = {};

function App({}: Props) {
  return (
    <div>
      <Navbar list={loginNavBarItems} />
      <Outlet />
    </div>
  );
}

export default App;
