import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/appik.css', 'resources/js/appik.js'],
            refresh: true,
        }),
    ],
});
