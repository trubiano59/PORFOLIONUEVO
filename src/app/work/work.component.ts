import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
works: any;

// otro dato simple
nombre: string = '';
apellido: string = '';

  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.works = data.works;
      this.nombre= data.nombres;
      this.apellido= data.apellidos;
    })
  }

}


