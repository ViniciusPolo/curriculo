import { Component, OnInit } from "@angular/core";
import { Aprendizados, Cursos } from "./aprendizado";

@Component({
    templateUrl:'./aprendizado.component.html'
})
export class Aprendizado implements OnInit{

    aprendizado: Aprendizados[] = [];
    curso: Cursos[] = [];
    
    ngOnInit(): void {
        this.aprendizado = [
            {
                id: 1,
                name: 'FATEC',
                course: 'Desenvolvimento de Software Multiplataforma',
                area: 'Tecnologia da Informação',
                inicialdate: 'February, 2021',
                finaldate: 'December, 2023'
            },
            {
                id: 2,
                name: 'UNIFEG',
                course: 'Administração',
                area: 'Gestão',
                inicialdate: 'February, 2006',
                finaldate: 'December, 2009'
            },
            
            
        ],
        this.curso = [
            {
                id: 1,
                name: 'Curso em Video',
                course: 'Python Mundo I',
                area: 'TI',
                
            },
            {
                id: 2,
                name: 'Curso em Video',
                course: 'Python Mundo II',
                area: 'TI',
                
            },
            
            
        ]
    }
}