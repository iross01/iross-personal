import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls:['../sass/body.scss']
})
export class BodyComponent {
  title = 'app works!';
}
