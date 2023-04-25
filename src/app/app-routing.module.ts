import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  // ... other routes
  { path: '', component: MainComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },  
  {path: 'links', component: LinksComponent}
  // ... other routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
