import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExperienceComponent } from './experience/experience.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { EducationComponent } from './education/education.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CertsComponent } from './certs/certs.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ReferenceComponent } from './references/reference-component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    AboutComponent,
    TechSkillsComponent,
    EducationComponent,
    PersonalDetailsComponent,
    CertsComponent,
    ContactDetailsComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
