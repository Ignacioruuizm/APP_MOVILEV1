import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SAnimalesService } from 'src/app/services/sanimales.service';
import { IAnimales } from 'src/app/interfaces/ianimales';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.page.html',
  styleUrls: ['./update-animal.page.scss'],
})
export class UpdateAnimalPage implements OnInit {

  animales: IAnimales = { id: 0, nombre: '', animal: '' };

  constructor(
    private animalesServ: SAnimalesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

    if (id) {
      this.getAnimalByID(id);
    } else {
      console.error('ID no encontrado en la URL');
    }
  }

  getAnimalByID(id: number) {
    this.animalesServ.getAnimalByID(id).subscribe(
      (resp: IAnimales) => {
        this.animales = resp;
      },
      (err) => {
        console.error('Error fetching animal details', err);
      }
    );
  }

  updateAnimal() {
    this.animalesServ.actualizarAnimales(this.animales.id, this.animales).subscribe(
      () => {
        this.router.navigateByUrl('/list-animales');
      },
      (err) => {
        console.error('Error updating animal', err);
      }
    );
  }
}