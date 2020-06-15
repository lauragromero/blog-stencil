import { newSpecPage } from '@stencil/core/testing';
import { DetailComment } from './detail-comment';

describe('detail-comment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DetailComment],
      html: `<detail-comment></detail-comment>`,
    });
    expect(page.root).toEqualHtml(`
      <detail-comment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </detail-comment>
    `);
  });
});
