import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SAnimalesService } from 'src/app/services/sanimales.service';
import { IAnimales } from 'src/app/interfaces/ianimales';

@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.page.html',
  styleUrls: ['./delete-animal.page.scss'],
})
export class DeleteAnimalPage implements OnInit {

  animales: IAnimales = { id: 0, nombre: '', animal: '' };

  constructor(
    private animalesServ: SAnimalesService,
    private route: ActivatedRoute,
    private router: Router
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
        this.animales = resp;
      },
      (err) => {
        console.error('Error fetching animal details', err);
      }
    );
  }

  eliminarAnimales() {
    if (this.animales.id) {
      this.animalesServ.eliminarAnimales(this.animales.id).subscribe(
        () => {
          this.router.navigateByUrl('/list-animales');
        },
        (err) => {
          console.error('Error deleting animal', err);
        }
      );
    } else {
      console.error('ID del animal no encontrado para eliminar');
    }
  }
}