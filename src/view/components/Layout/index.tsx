import React from 'react';
import './Layout.css';
import AddWordForm from '../AddWordForm';

const Layout = () => (
  <main className="Layout">
    <div className="Layout__content">
      <AddWordForm />
    </div>
  </main>
);

export default Layout;
