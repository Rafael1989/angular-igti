import { UserInfo } from './../classes/UserInfo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /**
   * Componentes que "chegam" através
   * de um componente "pai"
   */
  @Input() userInfo: UserInfo;
  @Input() login: String;
  @Input() isFetchingData: boolean;

  /**
   * Valores que "saem" ou são emitidos
   * pelo componente. Neste caso, usamos
   * a classe EventEmitter
   */
  @Output() loginChanged = new EventEmitter();

  constructor() {}

  /**
   * Emitimos o evento de troca de login, que
   * irá acarretar em uma nova requisição à API
   * do Github. Antes de enviar, verificamos se
   * o login é válido e também se é diferente
   * do último login utilizado, evitando requisições
   * desnecessárias.
   *
   * @param newLogin Novo login a ser utilizado
   */
  changeLogin(newLogin: string) {
    /**
     * Limpando espaços em branco no início e
     * fim da string de login
     */
    const trimmedLogin = newLogin.trim();

    /**
     * Validando o login
     */
    if (!trimmedLogin || trimmedLogin === this.login.trim()) {
      console.warn('Login inválido ou igual ao atual');
      return;
    }

    /**
     * Emitindo o evento de troca de login
     */
    this.loginChanged.emit(trimmedLogin);
  }
}
