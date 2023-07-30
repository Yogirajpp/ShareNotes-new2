// index.js (or App.js, your entry point file)

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from "react-dom/client"
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
