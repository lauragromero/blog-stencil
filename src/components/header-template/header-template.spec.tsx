import { newSpecPage } from '@stencil/core/testing';
import { HeaderTemplate } from './header-template';

describe('header-template', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderTemplate],
      html: `<header-template></header-template>`,
    });
    expect(page.root).toEqualHtml(`
      <header-template>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-template>
    `);
  });
});
