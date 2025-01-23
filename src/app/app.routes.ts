import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParentComponent } from './components/parent/parent.component';
import { TemplateDemoComponent } from './components/template-demo/template-demo.component';
import { ContentProjectComponent } from './components/content-project/content-project.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'parent', pathMatch: 'full' }, // Default route
  { path: 'parent', component: ParentComponent }, // Parent-Child Communication
  { path: 'template-demo', component: TemplateDemoComponent }, // Template and ng-container Demo
  { path: 'content-project', component: ContentProjectComponent }, // ng-content Demo
  { path: '**', redirectTo: 'parent' }, // Wildcard route for unknown paths
  ];
  