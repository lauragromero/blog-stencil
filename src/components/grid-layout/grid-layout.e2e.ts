import { newE2EPage } from '@stencil/core/testing';

describe('grid-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<grid-layout></grid-layout>');

    const element = await page.find('grid-layout');
    expect(element).toHaveClass('hydrated');
  });
});
