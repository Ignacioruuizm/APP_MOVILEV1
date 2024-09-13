import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-animales',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-animales',
    loadChildren: () => import('./AdopcionAnimales/list-animales/list-animales.module').then( m => m.ListAnimalesPageModule)
  },
  {
    path: 'add-animal',
    loadChildren: () => import('./AdopcionAnimales/add-animal/add-animal.module').then( m => m.AddAnimalPageModule)
  },
  {
    path: 'update-animal/:id',
    loadChildren: () => import('./AdopcionAnimales/update-animal/update-animal.module').then( m => m.UpdateAnimalPageModule)
  },
  {
    path: 'detail-animal/:id',
    loadChildren: () => import('./AdopcionAnimales/detail-animal/detail-animal.module').then( m => m.DetailAnimalPageModule)
  },
  {
    path: 'delete-animal/:id',
    loadChildren: () => import('./AdopcionAnimales/delete-animal/delete-animal.module').then( m => m.DeleteAnimalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
