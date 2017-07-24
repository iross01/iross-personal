import { IrossPage } from './app.po';

describe('iross App', () => {
  let page: IrossPage;

  beforeEach(() => {
    page = new IrossPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
