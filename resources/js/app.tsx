import '../css/app.css'; // <- imprescindible para Tailwind + DaisyUI
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(
                el,
                <div data-theme="nord"><App {...props} /></div> // <- tema DaisyUI
            );
            return;
        }

        createRoot(el).render(
            <div data-theme="nord"><App {...props} /></div> // <- tema DaisyUI
        );
    },
    progress: {
        color: '#4B5563',
    },
});
