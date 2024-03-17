import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTablesModule } from "angular-datatables";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataTablesModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inventario2';
  
}

