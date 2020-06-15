import { newE2EPage } from '@stencil/core/testing';

describe('detail-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<detail-card></detail-card>');

    const element = await page.find('detail-card');
    expect(element).toHaveClass('hydrated');
  });
});
