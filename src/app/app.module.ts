import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';

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
import { EditorComponent } from './pages/editor';

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
        EditorComponent,
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
            defaultLanguage: 'zh-hans',
        }),

        MonacoEditorModule.forRoot({
            baseUrl: './assets/amd',
            onMonacoLoad: () => {
                // eslint-disable-next-line
                const require = window.require as any;
                // eslint-disable-next-line
                require.config({
                    paths: {
                        MonacoMarkdown: './assets/amd/monaco-markdown/monaco-markdown.min.js',
                    },
                });
            },
        }),

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
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
export class AppModule {}
