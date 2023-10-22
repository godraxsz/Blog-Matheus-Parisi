import React from 'react';
import ReactDOM from 'react-dom/client';

import { DarkModeProvider } from './util/DarkModeToggler';
import { PageProvider } from './util/PageToggler';

import HomepageLayout from './App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <PageProvider>
    <DarkModeProvider>
      <HomepageLayout />
    </DarkModeProvider>
  </PageProvider>
);