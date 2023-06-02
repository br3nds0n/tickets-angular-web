import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
})
export class Tab1Page {
  constructor(public senhasService: SenhasService) {}
}
