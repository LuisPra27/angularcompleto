import { Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

export const routes: Routes = [
    {
        path: '',
        component: ItemsComponent
    },
    {
        path: 'add',
        component: AdditemComponent
    }
];
