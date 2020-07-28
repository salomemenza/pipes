import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarTexto'
})
export class OcultarTextoPipe implements PipeTransform {

  transform(value: string, estado: boolean = true): string {
    if(estado){
      value = value.replace(/./g, '*');
    }
    return value;
  }

}
