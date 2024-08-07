import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 valor1!:number;
 valor2!:number;
 resultado!:number;
 operaciones = [
 {valor:'distancia', muestraValor:'DISTANCIA'},
 ];
 seleccionada: string = this.operaciones[0].valor;
 operar() {
 switch (this.seleccionada) {
 case 'distancia' : this.resultado = this.valor1 * this.valor2
 break;
 }
}
}