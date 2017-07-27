import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {

	public showBody:boolean = false;

	constructor(){
		
	}

	toggleShowBody(){
		this.showBody = !this.showBody;
	}
}
