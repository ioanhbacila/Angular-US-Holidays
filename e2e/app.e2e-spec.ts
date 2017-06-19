import { AngulartestPage } from './app.po';

describe('angulartest App', () => {
  let page: AngulartestPage;

  beforeEach(() => {
    page = new AngulartestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
