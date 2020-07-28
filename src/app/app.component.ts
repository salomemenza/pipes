import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'saLoMOn meMEnZA';
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario:number = 1234.5;
  activarPass: boolean = true;

  fecha = new Date();
  idioma = 'es';
  videoUrl: string = "https://www.youtube.com/embed/rid0-Xxecys";

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre:'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primaver',
      casa: 20
    }
  }

  cambiarIdioma(cambio: string){
    this.idioma = cambio;
  }
}
