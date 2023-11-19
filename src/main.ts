import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { EnvironmentInjector } from '@angular/core';
import { registerLicense } from '@syncfusion/ej2-base';
import { enableProdMode } from '@angular/core';




// registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRGVGfV5yd0VHYlZQQ3xfQE0SNHVRdkdgWH5fdnRURmFYUER/V0U=');

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));