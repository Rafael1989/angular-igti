import { Component } from '@angular/core';

import { UserService } from './../services/user-service';
import { UserInfo } from '../classes/UserInfo';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent {
  currentTab = 'home';
  login = '';
  userInfo: UserInfo;
  repos;
  starred;
  isFetchingData = false;

  constructor(private userService: UserService) {}

  /**
   * Método para trocar o valor
   * de currentTab
   *
   * @param tab Aba a ser "trocada"
   */
  changeTab(tab) {
    this.currentTab = tab;
  }

  /**
   * Esse é o método que será executado pelo
   * componente 'home' através do EventEmitter.
   *
   * O método atualizará o state de login e realizará
   * uma nova busca na API do Github
   *
   * @param newLogin Login a ser atualizado
   */
  onLoginChange(newLogin: string) {
    this.login = newLogin;
    this.fetchUserInfo();
  }

  /**
   * Montando string de quantidade de repositórios
   */
  getReposCount() {
    return !!this.repos ? `(${this.repos.length})` : '';
  }

  /**
   * Montando string de quantidade de favoritos
   */
  getStarredCount() {
    return !!this.starred ? `(${this.starred.length})` : '';
  }

  /**
   * Faz a busca de dados do usuário do Github
   * utilizando userService
   * @param login Login a ser utilizado na busca
   */
  fetchUserInfo() {
    /**
     * Dando feedback de pesquisa
     * ao usuário
     */
    this.isFetchingData = true;

    /**
     * O método getUserInfoFrom(login) retorna um
     * observable. Portanto, só conseguimos executá-lo
     * com 'subscribe'
     */
    this.userService.getUserInfoFrom(this.login).subscribe(
      /**
       * Tratamento normal da requisição
       */
      userInfo => {
        /**
         * Caso o usuário seja válido, atualizamos
         * o state do componente, que é reativo
         */
        if (!!userInfo) {
          this.userInfo = userInfo;
          this.repos = this.userInfo.repos;
          this.starred = this.userInfo.starred;
        }
        this.isFetchingData = false;
      },
      /**
       * Tratamento de erro na requisição
       * (usuário não encontrado, por exemplo)
       */
      () => {
        this.userInfo = null;
        this.repos = null;
        this.starred = null;
        this.isFetchingData = false;
      }
    );
  }
}
