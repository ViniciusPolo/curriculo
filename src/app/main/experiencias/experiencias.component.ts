import { Component, OnInit } from "@angular/core";
import { Experiencias } from "./experiencias";
import { CommonModule } from "@angular/common";


@Component({
    templateUrl:'./experiencias.component.html',
})

export class Experiencia implements OnInit{

    experiencia: Experiencias[] = [];
    
    ngOnInit(): void {
        this.experiencia = [
            {
                id: 1,
                name: 'EddyData',
                position: 'Programador Full-Stack',
                description: 'roteirização',
                inicialdate: 'July, 15, 2021',
                finaldate: 'atual'
            },
            {
                id: 2,
                name: 'GurgelMix',
                position: 'Analista de Transporte',
                description: 'roteirização',
                inicialdate: 'Octuber, 01, 2019',
                finaldate: 'April, 12, 2021'
            },
            {
                id: 3,
                name: 'Coca Cola',
                position: 'Vendedor',
                description: 'roteirização',
                inicialdate: 'December, 15, 2015',
                finaldate: 'May, 6, 2019'
            },
            {
                id: 4,
                name: 'Coca Cola',
                position: 'Analista de Logistica',
                description: 'roteirização',
                inicialdate: 'April, 10, 2010',
                finaldate: 'December, 14, 2015'
            },
            
        ]
    }
}