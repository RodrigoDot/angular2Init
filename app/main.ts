import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = PlatformBrowserDynamic();
platform.bootstrapModule(AppModule);
