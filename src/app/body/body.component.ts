import { Component, EventEmitter } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls:['../sass/body.scss'],
  outputs:['close']
})
export class BodyComponent {

	public close: EventEmitter<boolean> = new EventEmitter<boolean>();

	emitClose(){
		this.close.emit(true);
	}

}
