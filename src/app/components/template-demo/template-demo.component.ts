import { Component } from '@angular/core';
import { ContentProjectComponent } from "../content-project/content-project.component";

@Component({
  selector: 'app-template-demo',
  imports: [ContentProjectComponent],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  showMessage = true;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

}
