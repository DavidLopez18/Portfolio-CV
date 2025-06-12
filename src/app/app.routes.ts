import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { RecogComponent } from './recog/recog.component';

export const routes: Routes = [
    {path:'main',component: MainComponent},
    {path:'experience',component: ExperienceComponent},
    {path:'skills',component: SkillsComponent},
    {path:'projects',component: ProjectsComponent},
    {path:'contact',component: ContactComponent},
    {path:'Recog',component: RecogComponent},
];