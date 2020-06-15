import { newSpecPage } from '@stencil/core/testing';
import { FooterBlog } from './footer-blog';

describe('footer-blog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FooterBlog],
      html: `<footer-blog></footer-blog>`,
    });
    expect(page.root).toEqualHtml(`
      <footer-blog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </footer-blog>
    `);
  });
});
