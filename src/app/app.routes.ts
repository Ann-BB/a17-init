import { Routes } from '@angular/router';
import { MasterComponent } from './shared/layouts/master/master.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MessagesComponent } from './pages/messages/messages.component';

export const routes: Routes = [
    {
        path: '', component: MasterComponent,
        children: [
            {
                path: '', component: LoginComponent
            },
            {
                path: 'register', component: RegisterComponent
            },
            {
                path: 'massages', component: MessagesComponent
            },
            {
                path: 'compose', component: MessagesComponent
            }
        ]
    }
];
