import { FinditPage } from './app.po';

describe('findit App', function() {
  let page: FinditPage;

  beforeEach(() => {
    page = new FinditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
