import { newE2EPage } from '@stencil/core/testing';

describe('header-template', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-template></header-template>');

    const element = await page.find('header-template');
    expect(element).toHaveClass('hydrated');
  });
});
