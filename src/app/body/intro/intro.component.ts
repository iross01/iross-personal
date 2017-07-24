import { Component, ViewChild, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['../../sass/body.scss']
})
export class IntroComponent {

	@ViewChild('name1') name1: ElementRef;
	@ViewChild('name2') name2: ElementRef;

	public inView:boolean;

	constructor(private renderer:Renderer){

	}

	ngAfterViewInit() {
		setTimeout(() => { 
		 	this.inView = true;
		}, 500); // Or however long you need the delay to be
	} 
}
