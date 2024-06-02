import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {path:'experience',component: ExperienceComponent},
    {path:'header',component: HeaderComponent},
    {path:'main',component: MainComponent},
    {path:'projects',component: ProjectsComponent},
    {path:'skills',component: SkillsComponent},
];