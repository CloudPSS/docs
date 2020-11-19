import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './pages/document';
import { ErrorComponent } from './pages/error';
import { EditorComponent } from './pages/editor';

const routes: Routes = [
    {
        path: '_edit',
        component: EditorComponent,
    },
    {
        path: '_error/:code',
        component: ErrorComponent,
    },
    {
        matcher: (segments) => {
            const [category, ...rest] = segments;
            const posParams = { ...Object.fromEntries(Object.entries(rest)) };
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
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
