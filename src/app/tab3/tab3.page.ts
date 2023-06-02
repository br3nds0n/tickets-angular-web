import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {

  constructor(public senhasService: SenhasService) {}

}
