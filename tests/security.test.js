const security = require("../security");
const event = require("./event.json");

test("validate slack request", () => {
  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  expect(security.validateSlackRequest(event, signingSecret)).toBe(true);
});
