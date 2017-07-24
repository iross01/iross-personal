import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './body/about/about.component';
import { SkillsComponent } from './body/skills/skills.component';
import { ContactComponent } from './body/contact/contact.component';
import { ExperienceComponent } from './body/experience/experience.component';
import { EducationComponent } from './body/education/education.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    BodyComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
