import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAnimalPageRoutingModule } from './delete-animal-routing.module';

import { DeleteAnimalPage } from './delete-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAnimalPageRoutingModule
  ],
  declarations: [DeleteAnimalPage]
})
export class DeleteAnimalPageModule {}
