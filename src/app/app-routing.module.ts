import { ContactComponent } from './page/contact/contact.component';
import { CentralPageComponent } from './page/central-page/central-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pill/:id', component: CentralPageComponent },
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
