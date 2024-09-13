import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimal } from 'src/app/interfaces/ianimal';
import { SAnimalesService } from 'src/app/services/sanimales.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.page.html',
  styleUrls: ['./add-animal.page.scss'],
})
export class AddAnimalPage implements OnInit {


  newAnimal:IAnimal ={
    nombre: "Nombre Animal",
    animal: "Animal Nuevo"
  }

  constructor(
    private animalServ:SAnimalesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  crearAnimal(){
    this.animalServ.crearAnimal(this.newAnimal).subscribe()
    this.router.navigateByUrl("/list-animales")
  }

}
