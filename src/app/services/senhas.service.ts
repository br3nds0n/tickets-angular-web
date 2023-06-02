import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  constructor() {}

  public inputNovaSenha: string = '';

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  private senhasArray: { [key: string]: string[] } = {
    SG: [],
    SP: [],
    SE: []
  };

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }
  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha: string = '') {
    tipoSenha == 'SG' ? this.somaGeral() : tipoSenha == 'SP' ? this.somaPrior() : tipoSenha == 'SE' ? this.somaExame() : null;

    this.inputNovaSenha = this._gerarSenha(tipoSenha);
  }

  private _gerarSenha(tipoSenha: string) {
    let senha = new Date().getFullYear().toString().substring(2, 4) +
    new Date().getMonth().toString().padStart(2, '0') +
    new Date().getDate().toString().padStart(2, '0') +
    '-' +
    tipoSenha +
    (this.senhasArray[tipoSenha].length + 1).toString().padStart(2, '0');

    this.senhasArray[tipoSenha].push(this.inputNovaSenha);

    return senha;
  }
}
