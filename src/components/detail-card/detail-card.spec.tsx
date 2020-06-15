import { newSpecPage } from '@stencil/core/testing';
import { DetailCard } from './detail-card';

describe('detail-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DetailCard],
      html: `<detail-card></detail-card>`,
    });
    expect(page.root).toEqualHtml(`
      <detail-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </detail-card>
    `);
  });
});
