import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';

const routes: Routes = [
  { path: 'One', component: OneComponent },
  { path: 'Two', component: TwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
