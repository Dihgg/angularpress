import { Component, ElementRef, Renderer2 } from '@angular/core';
import { WordpressService } from './services/wordpress.service';
import { THEME } from './services/wordpress.interface';

declare const TAGS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private $appRoot: ElementRef,
    private wordpress: WordpressService,
    private renderer: Renderer2
  ) {
    this.wordpress.setTHEME(this.getAttr<THEME>('data-theme'));
    this.wordpress.setTRANSLATION(this.getAttr('data-translation'));
    this.setTags();
  }

  /**
   * Retorna um atributo do app-root
   * @param attr Nome do atributo
   * @returns {T} Retorna um valor tipado do app-root
   */
  public getAttr<T>(attr: string): T {
    return JSON.parse(this.$appRoot.nativeElement.getAttribute(attr));
  }

  /**
   * Adiciona as tags do wordpress no html
   * @description Não é possível adicionar diretamente ao index.php por conta do build --prod
   */
  public setTags(): void {
    const tags = {
      html: TAGS.html.replace(/lang=/, '').replace("\"", ""),
      body: TAGS.body.replace(/class=/, '').replace("\"", "")
    };
    this.renderer.setAttribute(document.querySelector('html'), 'lang', tags.html)
    
    tags.body.split(" ").forEach((cssClass: string) => {
      this.renderer.addClass(document.querySelector('body'), cssClass);
    });
  }
}
