import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavTitle() {
    return element(by.css('nav h3')).getText();
  }
}
