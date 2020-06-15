import { newSpecPage } from '@stencil/core/testing';
import { GridLayout } from './grid-layout';

describe('grid-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GridLayout],
      html: `<grid-layout></grid-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <grid-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </grid-layout>
    `);
  });
});
