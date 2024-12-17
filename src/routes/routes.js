// src/routes/routes.js
import Home from '../pages/Home';
import About from '../pages/About';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
];

export default routes;
