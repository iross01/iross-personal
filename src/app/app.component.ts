import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {

	@ViewChild('logo') logo;

	public navOpen:boolean = false;
	public resumeOpen:boolean = false;

	@HostListener('mousemove', ['$event'])

    onMousemove(event: MouseEvent) {
    	// this.logo.nativeElement.style.webkitTransform = 'translate3d(' + event.clientX*0.1 + 'px, ' + event.clientY*0.1 + 'px, 0px)';
	}


    constructor(elementRef: ElementRef) {
    }

	ngOnInit(){
	}

	toggleNavOpen(){
		this.navOpen = !this.navOpen;
	}
	
	toggleResumeOpen(){
		this.resumeOpen = !this.resumeOpen;
	}


}
