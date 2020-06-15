import { newSpecPage } from '@stencil/core/testing';
import { PostComponent } from './post-component';

describe('post-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostComponent],
      html: `<post-component></post-component>`,
    });
    expect(page.root).toEqualHtml(`
      <post-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-component>
    `);
  });
});
