import { Component, ComponentInterface, h, Host } from '@stencil/core';

// const repeat =[1,2,3,4,5,6,6,7,8,8,9]

@Component({
  tag: 'grid-layout',
  styleUrl: 'grid-layout.css',
  shadow: true,
})
export class GridLayout implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
