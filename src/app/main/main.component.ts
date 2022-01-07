import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl:"./main.component.html"
})


export class Main{
    constructor(private activatedRoute: ActivatedRoute) { }

}