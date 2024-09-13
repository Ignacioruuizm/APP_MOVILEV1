import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAnimalPage } from './detail-animal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAnimalPageRoutingModule {}
