__adapter__.addStepDefinitions(function (scenario) {
  scenario.Given(/^bb$/, function () { });
  scenario.When(/^vv$/, function () { });
  scenario.When(/^it is not executed$/, function (callback) { callback(null, 'pending'); });
  scenario.Then(/^cc$/, function () { });
  // scenario.Then(/^cc$/, function (callback) { callback(new Error('Step failed')); });
});
