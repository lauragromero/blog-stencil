import { newE2EPage } from '@stencil/core/testing';

describe('post-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-component></post-component>');

    const element = await page.find('post-component');
    expect(element).toHaveClass('hydrated');
  });
});
