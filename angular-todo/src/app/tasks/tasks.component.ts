import { Component, OnInit } from "@angular/core";

/**
 * A classe de tarefas deve ser importada
 * para poder ser utilizada no componente.
 */
import { Task } from "./classes/Task";

/**
 * Os componentes do Angular são "decorados"
 * com @Component, indicando o nome do seletor,
 * o arquivo do template (que também pode ser
 * 'inline') e o arquivo de estilos CSS.
 */
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  /**
   * Vetor de tarefas
   */
  tasks: Task[];

  /**
   * No construtor, recebemos as injeções de
   * dependências e inicializamos os atributos
   * da classe, se necessário
   */
  constructor() {
    /**
     * Incluímos 3 tarefas
     */
    this.tasks = [
      new Task("Estudar REA"),
      new Task("Exercícios REA"),
      new Task("Trabalho REA")
    ];
  }

  /**
   * Lifecycle hook para inicializar
   * dados vindos de serviços, por exemplo.
   * Não será necessário aqui.
   */
  ngOnInit() {}

  /**
   * Método público a ser utilizado pelo template.
   * Inserimos as tarefas aqui
   * @param newTaskDescription Tarefa a ser incluída
   */
  public addTask(newTaskDescription: string) {
    /**
     * Só adicionamos tarefas que de fato "existam"
     */
    if (!newTaskDescription) {
      return;
    }

    /**
     * Só adicionamos tarefas ainda não incluídas
     * previamente
     */
    if (this._isTaskAlreadyIncluded(newTaskDescription)) {
      return;
    }

    this.tasks.push(new Task(newTaskDescription));
  }

  /**
   * Verifica se determinada tarefa já foi
   * incluída no vetor
   * @param taskDescription Descrição da tarefa a ser verificada
   */
  private _isTaskAlreadyIncluded(taskDescription: string) {
    /**
     * Filtramos a tarefa pela descrição
     */
    const filter = this.tasks.filter(
      task => task.description === taskDescription
    );

    /**
     * Se há registros, indica que a
     * tarefa já existe
     */
    return filter.length > 0;
  }

  /**
   * Obtém o índice da tarefa no vetor
   * de tarefas
   * @param task Tarefa a ser verificada
   */
  private _getTaskIndex(task: Task) {
    return this.tasks.indexOf(task);
  }

  /**
   * Método para remover a tarefa
   * @param taskToRemove Tarefa a ser excluída
   */
  public removeTask(taskToRemove: Task) {
    this.tasks.splice(this._getTaskIndex(taskToRemove), 1);
  }

  /**
   * Método para concluir a tarefa
   * @param taskToComplete Tarefa a ser concluída
   */
  public completeTask(taskToComplete: Task) {
    taskToComplete.completeTask();
  }
}
