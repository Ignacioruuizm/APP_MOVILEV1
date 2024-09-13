import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAnimalPage } from './delete-animal.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAnimalPageRoutingModule {}
