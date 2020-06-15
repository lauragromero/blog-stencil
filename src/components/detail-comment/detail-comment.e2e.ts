import { newE2EPage } from '@stencil/core/testing';

describe('detail-comment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<detail-comment></detail-comment>');

    const element = await page.find('detail-comment');
    expect(element).toHaveClass('hydrated');
  });
});
