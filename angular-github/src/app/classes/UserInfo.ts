export class UserInfo {
  private _name: string;
  private _avatar: string;
  private _login: string;
  private _followers: number;
  private _following: number;
  private _repos: string[];
  private _starred: string[];

  constructor(
    pName: string,
    pAvatar: string,
    pLogin: string,
    pFollowers: number,
    pFollowing: number
  ) {
    this._name = pName;
    this._avatar = pAvatar;
    this._login = pLogin;
    this._followers = pFollowers;
    this._following = pFollowing;
    this._repos = [];
    this._starred = [];
  }

  get name() {
    return this._name;
  }

  get avatar() {
    return this._avatar;
  }

  get login() {
    return this._login;
  }

  get followers() {
    return this._followers;
  }

  get following() {
    return this._following;
  }

  get repos() {
    /**
     * Imutabilidade
     */
    return [].concat(this._repos);
  }

  /**
   * Ordenando os repositórios antes
   * da atribuição
   */
  set repos(pRepos: string[]) {
    const sortedRepos = UserInfo.sortRepos(pRepos);
    this._repos = sortedRepos;
  }

  get starred() {
    /**
     * Imutabilidade
     */
    return [].concat(this._starred);
  }

  /**
   * Ordenando os repositórios antes
   * da atribuição
   */
  set starred(pStarred: string[]) {
    const sortedStarred = UserInfo.sortRepos(pStarred);
    this._starred = sortedStarred;
  }

  /**
   * Método estático para ordenar os repositórios
   * em ordem alfabética
   * @param reposToSort Repositórios a serem ordenados
   */
  static sortRepos(reposToSort) {
    if (!!reposToSort && reposToSort.length > 0) {
      return reposToSort.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    }
  }

  /**
   * Método estático para facilitar a criação
   * do objeto através dos JSON's vindos
   * do Github
   * @param jsonUserInfo JSON com userInfo
   * @param jsonRepos JSON com repos
   * @param jsonStarred JSON com starred
   */
  static fromJSON(jsonUserInfo, jsonRepos, jsonStarred): UserInfo {
    const userInfo = new UserInfo(
      jsonUserInfo['name'],
      jsonUserInfo['avatar_url'],
      jsonUserInfo['login'],
      jsonUserInfo['followers'],
      jsonUserInfo['following']
    );

    userInfo.repos = [].concat(jsonRepos);
    userInfo.starred = [].concat(jsonStarred);

    return userInfo;
  }
}
