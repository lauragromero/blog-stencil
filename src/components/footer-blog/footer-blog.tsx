import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'footer-blog',
  styleUrl: 'footer-blog.css',
  shadow: true,
})
export class FooterBlog implements ComponentInterface {

  render() {
    return (
      <Host>
        <footer class="footer">
          <span> © the blog. </span>
          </footer>
      </Host>
    );
  }

}
