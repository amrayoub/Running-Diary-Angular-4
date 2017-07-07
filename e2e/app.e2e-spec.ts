import { RunningDiaryPage } from './app.po';

describe('running-diary App', () => {
  let page: RunningDiaryPage;

  beforeEach(() => {
    page = new RunningDiaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
