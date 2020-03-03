import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import Layout from './view/components/Layout';

const App = () => (
  <Provider {...stores}>
    <Layout />
  </Provider>
);

export default App;
