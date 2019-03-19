module.exports = {
  '@tags': ['demo'],
  'Does not show the task list if there are no tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .expect.element('.main').to.not.be.present;
    client.end();
  },
  'Does not show the footer if there are no tasks' (client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .expect.element('.footer').to.not.be.present;
    client.end();
  },
  'On page load, it sets focus on the input field' (client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .assert.elementPresent('.header .new-todo:focus')
      .end();
  },
  'When I add a task, it shows to do items' (client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      .keys(client.Keys.ENTER)
      .assert.containsText('.todo-list li:first-child label', 'New task')
      client.end();
  },
  'Marks a todo item as completed by striking through it'(client) {
      client
        .url('http://todomvc.com/examples/react/#/')
        .waitForElementVisible('.header h1')
        .setValue('.new-todo', 'New task')
        .keys(client.Keys.ENTER)
        .click('.todo-list li:first-child .toggle')
        .assert.cssClassPresent('.todo-list li:first-child', 'completed')
        .end();
    },
  'Shows how many items there are left' (client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      .keys(client.Keys.ENTER)
      .setValue('.new-todo', 'Another task')
      .keys(client.Keys.ENTER)
      .assert.containsText('.todo-count', '2 items left')
      .click('.todo-list li:first-child .toggle')
      .assert.containsText('.todo-count', '1 item left')
      client.end();
  },
  'Does not add empty or blank tasks' (client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      .keys(client.Keys.ENTER)
      .keys(client.Keys.ENTER)
      .setValue('.new-todo', ' ')
      .assert.containsText('.todo-count', '1 item left')
      client.end()
  }
}
