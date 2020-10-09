import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './pages/document';
import { ErrorComponent } from './pages/error';

const routes: Routes = [
    {
        path: 'error/:code',
        component: ErrorComponent,
    },
    {
        matcher: (segments) => {
            const [language, category, ...rest] = segments;
            const posParams = { ...Object.fromEntries(Object.entries(rest)) };
            if (language) posParams.language = language;
            if (category) posParams.category = category;
            return {
                consumed: segments,
                posParams,
            };
        },
        component: DocumentComponent,
    },
];

/**
 * 路由
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
