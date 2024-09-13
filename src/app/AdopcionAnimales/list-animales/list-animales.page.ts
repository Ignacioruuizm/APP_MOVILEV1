import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SAnimalesService } from 'src/app/services/sanimales.service';
import { IAnimales } from 'src/app/interfaces/ianimales'; // Ruta correcta

@Component({
  selector: 'app-list-animales',
  templateUrl: './list-animales.page.html',
  styleUrls: ['./list-animales.page.scss'],
})
export class ListAnimalesPage implements OnInit {

  animales: IAnimales[] = []; // Usa la interfaz `IAnimales`

  constructor(private animalesServ: SAnimalesService, private loadingCtr: LoadingController) { }

  ngOnInit() {
    this.loadAnimales();
  }

  async loadAnimales(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtr.create({
      message: "Cargando....",
      spinner: "bubbles"
    });
    await loading.present();

    this.animalesServ.listarAnimales().subscribe(
      (resp: IAnimales[]) => { // Asegúrate de que el tipo de `resp` sea `IAnimales[]`
        loading.dismiss();
        this.animales = resp; // Aquí asignas directamente la respuesta
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }
}
