import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {

  render() {
    return (
      <header class="header">
            <h1 class="header__title">THE BLOG<span>.</span></h1>
      </header>
    );
  }

}
