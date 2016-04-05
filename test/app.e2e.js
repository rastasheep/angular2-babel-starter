describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('A skeleton Angular 2 app built with Babel and ES6');
  });

  it('shows a link to the GitHub repo', () => {
    element(by.linkText('rastasheep/angular2-babel-starter')).click();

    browser.ignoreSynchronization = true;
    expect(browser.getCurrentUrl())
      .toEqual('https://github.com/rastasheep/angular2-babel-starter');
    browser.ignoreSynchronization = false;
  });

  it('shows a link to the twitter profile', () => {
    element(by.linkText('rastasheep')).click();

    browser.ignoreSynchronization = true;
    expect(browser.getCurrentUrl())
      .toEqual('https://twitter.com/lesa_ns');
    browser.ignoreSynchronization = false;
  });

  it('switches contents by routing', () => {
    expect(element(by.css('hello')).getText()).toEqual('Hello, Angular 2!');
    expect(browser.getCurrentUrl()).not.toMatch(/#/);

    element(by.linkText('Ciao')).click();
    expect(element(by.css('ciao')).getText()).toEqual('Ciao, bella!');
    expect(browser.getCurrentUrl()).toMatch(/\/#\/ciao\/bella$/);

    element(by.linkText('Hello')).click();
    expect(element(by.css('hello')).getText()).toEqual('Hello, Angular 2!');
    expect(browser.getCurrentUrl()).not.toMatch(/#/);
  });
});
