import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Workbox } from 'workbox-window';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then( _=> loadServiceWorker())
.catch(err => console.error(err));

function loadServiceWorker() {
  if ('serviceWorker' in navigator) {
   const wb = new Workbox('service-worker.js');
   wb.register();
  }
 }
