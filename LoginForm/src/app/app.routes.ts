import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path:'',component:FormComponent},
    {path:'success',component:SuccessComponent},
    {path:'error',component:ErrorComponent}   
];
