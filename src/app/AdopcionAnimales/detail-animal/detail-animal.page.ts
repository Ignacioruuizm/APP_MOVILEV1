import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SAnimalesService } from 'src/app/services/sanimales.service';
import { IAnimales } from 'src/app/interfaces/ianimales';

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.page.html',
  styleUrls: ['./detail-animal.page.scss'],
})
export class DetailAnimalPage implements OnInit {

  animales: IAnimales = { id: 0, nombre: '', animal: '' };

  constructor(
    private animalesServ: SAnimalesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const animalID = idParam ? +idParam : 0;

    if (animalID) {
      this.getAnimalByID(animalID);
    } else {
      console.error('ID no encontrado en la URL');
    }
  }

  getAnimalByID(animalID: number) {
    this.animalesServ.getAnimalByID(animalID).subscribe(
      (resp: IAnimales) => {
        if (resp) {
          this.animales = resp;
        } else {
          console.error('No se encontró el animal con ID:', animalID);
        }
      },
      (err) => {
        console.error('Error fetching animal details', err);
      }
    );
  }
}