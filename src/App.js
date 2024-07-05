import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import Routes from './routes';
import { ContainerToast } from './components/Toast';
// import store from './store';
import theme from './theme/theme';
import './assets/scss/index.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <div id='portal' />
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={Routes} />
    </Suspense>
    <ContainerToast />
  </ThemeProvider>
);

export default App;
