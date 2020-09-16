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
        path: '**',
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
