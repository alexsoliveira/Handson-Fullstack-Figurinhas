import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/list/index.component';
import { EditProductComponent } from './product/edit/edit.component';
import { AddProductComponent } from './product/add/add.component';

const routes : Routes = [
    { 
        path: '', 
        component: ProductListComponent
    },
    {
        path: 'index',
        component:ProductListComponent
    },
    {
        path: 'add',
        component: AddProductComponent
    },
    {
        path: 'edit', 
        component: EditProductComponent
    }
];

export const routing = RouterModule.forRoot(routes);