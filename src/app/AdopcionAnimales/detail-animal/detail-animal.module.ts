import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAnimalPageRoutingModule } from './detail-animal-routing.module';

import { DetailAnimalPage } from './detail-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAnimalPageRoutingModule
  ],
  declarations: [DetailAnimalPage]
})
export class DetailAnimalPageModule {}
