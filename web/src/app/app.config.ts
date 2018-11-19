import { isDevMode } from '@angular/core';

export class AppConfig {
    public readonly appName = 'BookABook';
    public readonly navbarTitle = 'BookABook';
    public readonly navbarLogo = 'assets/icons/logo.png';

    get apiUrl() {
        const hostname = window.location.hostname;
        const port = isDevMode() ? ':3000' : '/api';
        return `http://${hostname}${port}`;
    }
};