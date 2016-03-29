describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('A skeleton Angular 2 app built with Babel and ES6');
  });

  it('shows a link to the GitHub repo', () => {
    element(by.linkText('GitHub')).click();

    browser.ignoreSynchronization = true;
    expect(browser.getCurrentUrl())
      .toEqual('https://github.com/shuhei/babel-angular2-app');
    browser.ignoreSynchronization = false;
  });

  it('switches contents by routing', () => {
    expect(element(by.css('hello')).getText()).toEqual('Hello, Angular 2!');
    expect(browser.getCurrentUrl()).not.toMatch(/#/);

    element(by.linkText('Ciao')).click();
    expect(element(by.css('ciao')).getText()).toEqual('Ciao, ng2!');
    expect(browser.getCurrentUrl()).toMatch(/\/#\/ciao\/ng2$/);

    element(by.linkText('Hello')).click();
    expect(element(by.css('hello')).getText()).toEqual('Hello, Angular 2!');
    expect(browser.getCurrentUrl()).not.toMatch(/#/);
  });
});
