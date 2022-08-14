// react
import React from "react"; 
import App from "src/components/App.jsx";
import { createRoot } from 'react-dom/client';

// react ui
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

