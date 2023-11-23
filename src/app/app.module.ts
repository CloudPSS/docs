import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import * as constants from './constants';
import { AppComponent } from './root';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppInitializerService } from './app-initializer';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { DocumentComponent } from './pages/document';
import { ErrorComponent } from './pages/error';
import { MarkdownComponent } from './components/markdown';
import { NavbarComponent } from './components/navbar';
import { NavListComponent } from './components/nav-list';
import { NavBaseComponent } from './components/nav-base';
import { TocComponent } from './components/toc';

/**
 * 主模块
 */
@NgModule({
    declarations: [
        AppComponent,
        MarkdownComponent,
        NavBaseComponent,
        NavbarComponent,
        NavListComponent,
        DocumentComponent,
        ErrorComponent,
        TocComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: WebpackTranslateLoader,
            },
            defaultLanguage: WebpackTranslateLoader.defaultLang,
        }),

        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useClass: AppInitializerService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(injector: Injector) {
        constants.initInjectable(Injector, injector);
    }
}
