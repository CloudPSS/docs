import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownComponent } from './components/markdown';
import { DocumentComponent } from './pages/document';
import { AppComponent } from './root';
import { AppInitializerService } from './app-initializer';
import { ErrorComponent } from './pages/error';
import { NavbarComponent } from './components/navbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

/**
 * 主模块
 */
@NgModule({
    declarations: [AppComponent, MarkdownComponent, NavbarComponent, DocumentComponent, ErrorComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: WebpackTranslateLoader,
            },
            defaultLanguage: 'zh-hans',
        }),
        BrowserAnimationsModule,

        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
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
