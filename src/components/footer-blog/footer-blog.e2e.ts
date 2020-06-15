import { newE2EPage } from '@stencil/core/testing';

describe('footer-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<footer-blog></footer-blog>');

    const element = await page.find('footer-blog');
    expect(element).toHaveClass('hydrated');
  });
});
