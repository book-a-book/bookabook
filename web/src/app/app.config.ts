import { isDevMode } from '@angular/core';

export class AppConfig {
    public readonly appName = 'Book A Book';
    public readonly navbarTitle = 'Book A Book';
    public readonly navbarLogo = 'assets/icons/logo.png';

    get apiUrl() {
        const hostname = window.location.hostname;
        return isDevMode() ? `http://${hostname}:3000` : `https://${hostname}/api`;
    }
};
