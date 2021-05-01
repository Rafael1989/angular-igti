import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
  /**
   * Vetor de repositórios
   * a ser monitorado
   * pelo template
   */
  @Input() repos = [];

  /**
   * Referência ao tipo de repositório
   */
  @Input() type: string;

  /**
   * Indicador de busca na API do Github
   */
  @Input() isFetchingData: boolean;

  /**
   * Gera uma mensagem de feedback
   * ao usuário conforme state
   */
  getFeedback(): string {
    if (this.isFetchingData) {
      return `Carregando ${
        this.type === 'starred'
          ? 'repositórios favoritos...'
          : 'repositórios...'
      }`;
    }

    return `Nenhum repositório ${
      this.type === 'starred' ? 'favorito' : ''
    } encontrado.`;
  }
}
