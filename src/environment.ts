export class Environment {

  domain: string;
  title: string;
  ratio: number[];
  language: string;

  constructor() {
    this.domain = document.domain;
    this.title = document.title;
    this.ratio = [window.screen.height, window.screen.width];
    this.language = navigator.language;
  }
}