/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import RenderRouter from 'routes';
import { BrowserRouter, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div data-theme="dark">
      <Helmet titleTemplate="%s - Boileurplate">
        <meta name="description" content="Truthy CMS" />
      </Helmet>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}
