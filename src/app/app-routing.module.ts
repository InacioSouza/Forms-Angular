import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { FormComponent } from './pages/form-template/form.component';
import { FormReativoComponent } from './pages/form-reativo/form-reativo.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent },
  { path: 'template', component: FormComponent },
  { path: 'reativo', component: FormReativoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
