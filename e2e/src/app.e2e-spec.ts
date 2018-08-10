import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display nav title', () => {
    page.navigateTo();
    expect(page.getNavTitle()).toEqual('ROCKETS');
  });
});
