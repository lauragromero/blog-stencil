import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'header-template',
  styleUrl: 'header-template.css',
  shadow: true,
})
export class HeaderTemplate implements ComponentInterface {
  
  @Prop() headerTitle: string;

  render() {
    return (
      <Host>
        <header class="header">
            <h1 class="header__title">{this.headerTitle}</h1>
        </header>
      </Host>
    );
  }

}
