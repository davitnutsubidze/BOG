import { BogPage } from './app.po';

describe('bog App', () => {
  let page: BogPage;

  beforeEach(() => {
    page = new BogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
