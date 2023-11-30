// Bibliotecas
import React from 'react';
import ReactDOM from 'react-dom/client';

// Providers/Util
import { DarkModeProvider } from './util/DarkModeToggler';
import { PageProvider } from './util/PageToggler';
import { AuthProvider } from './firebase/AuthCheck';
import PreloadImages from './util/PreLoadImgs';

// Main App
import HomepageLayout from './App';

// Estilização CSS
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <PageProvider>
      <DarkModeProvider>
        <PreloadImages />
        <HomepageLayout />
      </DarkModeProvider>
    </PageProvider>
  </AuthProvider>
);