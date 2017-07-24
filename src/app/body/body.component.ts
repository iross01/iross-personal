import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls:['../sass/body.scss']
})
export class BodyComponent {
  title = 'app works!';
}
