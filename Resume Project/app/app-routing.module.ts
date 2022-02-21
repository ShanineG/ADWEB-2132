import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [{path: 'about', component:AboutComponent},  //
                        {path: 'skills', component:SkillsComponent}, //
                        {path: 'education', component:EducationComponent},
                        {path: '**', component:PageNotFoundComponent}]; //

@NgModule({
  declarations: [], //
  imports: [RouterModule.forRoot(routes)], //
  exports: [RouterModule], //
})
export class AppRoutingModule { }
