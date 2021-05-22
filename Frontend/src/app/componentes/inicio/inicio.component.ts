import { Component, OnInit } from '@angular/core';
import{NominaService, Persona}from '../../Services/nomina.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  //var
  //var
  ListarPersona: Persona[] | undefined;

  constructor(private NominaService:NominaService, private router:Router) { }
  

  ngOnInit(): void {
    this.listarPersona();
  }

  listarPersona(){
    this.NominaService.getPersonas().subscribe(
      res=>{
        console.log(res)
        this.ListarPersona=<any>res;
      },
      err => console.log(err)
    );
  }

}
