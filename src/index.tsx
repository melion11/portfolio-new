import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import './i18n';

import './styles/index.css'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
