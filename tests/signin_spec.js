module.exports = {
  '@tags': ['signin'],
  'User can sign in'(client) {
    const signinPage = client.page.signinPage();
    const instancesPage = client.page.instancesPage();

    signinPage
      .navigate()
      .signin(process.env.EMAIL, process.env.PASSWORD);

    instancesPage.assert.containsText('@homepageWelcomeTitle', 'Sign in');

    client.end();
  }
};
