import {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import './styles/index.css'

import './shared/config/i18n/i18n.ts';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Suspense fallback={''}>
            <App/>
        </Suspense>
    </StrictMode>
);
