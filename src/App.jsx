import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from 'navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import './index.scss';

const HomePage = lazy(() => import('./Pages/HomePage'));
const AboutPage = lazy(() => import('./Pages/AboutPage'));
const ColorsPage = lazy(() => import('./Pages/ColorsPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFound'));
const CharactersPage = lazy(() => import('./Pages/CharactersPage'));

const WrapSuspense = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <WrapSuspense>
              <AboutPage />
            </WrapSuspense>
          }
        />
        <Route
          path='/colors'
          element={
            <WrapSuspense>
              <ColorsPage />
            </WrapSuspense>
          }
        />
        <Route
          path='/character'
          element={
            <WrapSuspense>
              <CharactersPage />
            </WrapSuspense>
          }
        />
        <Route
          element={
            <WrapSuspense>
              <NotFoundPage />
            </WrapSuspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
