import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'nav-menu',
  styleUrl: 'nav-menu.css',
  shadow: true,
})
export class NavMenu implements ComponentInterface {

  @Prop() linkHome;

  render() {
    return (
      <Host>
        <nav class="menu__nav">
          <ul class="menu__list">
            <li class="menu__list-item"><a><stencil-route-link url="/home" exact={true}>Home</stencil-route-link></a></li>
            <li class="menu__list-item"><a><stencil-route-link url="/login" exact={true}>singIn</stencil-route-link></a></li>
            <li class="menu__list-item"><a href="">logIn</a></li>
            <li class="menu__list-item"><a href="">logOut</a></li>
          </ul>
        </nav>
      </Host>
    );
  }

}
