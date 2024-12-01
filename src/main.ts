import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {MyNetConfig} from './assets/config/MyNetConfig';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

MyNetConfig.startNet();
