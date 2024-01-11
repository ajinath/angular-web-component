import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: { root: true },
        children: [
            {
                path: 'page-one',
                loadChildren: () => import('./routes/page-one/page-one.module').then(mod => mod.PageOneModule)
            },
            {
                path: 'page-two',
                loadChildren: () => import('./routes/page-two/page-two.module').then(mod => mod.PageTwoModule)
            }
        ]
    }
];
