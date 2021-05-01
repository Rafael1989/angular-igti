/**
 * Classe de tarefa com TypeScript
 */
export class Task {
  /**
   * Atributo de descrição
   */
  private _description: string;

  /**
   * Atributo de status
   */
  private _status: string;

  /**
   * Construtor
   * @param pDescription Descrição da tarefa
   */
  constructor(pDescription: string) {
    this._description = pDescription;
    this._status = 'new';
  }

  /**
   * Getter de descrição
   */
  get description(): string {
    return this._description;
  }

  /**
   * Getter de status
   */
  get status(): string {
    return this._status;
  }

  /**
   * Método público para concluir
   * a tarefa
   */
  completeTask(): void {
    this._status = 'done';
  }

  /**
   * Método público para indicar
   * se a tarefa está completa/concluída
   */
  isCompleted(): boolean {
    return this._status === 'done';
  }
}
