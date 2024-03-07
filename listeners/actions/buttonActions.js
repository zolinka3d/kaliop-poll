module.exports.register = (app) => {
  app.action("button_click", async ({ ack, body, say }) => {
    await ack();
    await say(`Button clicked by <@${body.user.id}>`);
  });

  //   app.action("plain_text_input-action", async ({ ack, body, say }) => {
  //     await ack();
  //     await say(`Input received from <@${body.user.id}>`);
  //   });

  //   app.action("static_select-action", async ({ ack, body, say }) => {
  //     await ack();
  //     await say(`Select received from <@${body.user.id}>`);
  //   });

  app.action("ok", async ({ ack, body, say }) => {
    await ack();
    console.log(body);
    await say(`Button clicked by <@${body.user.id}>`);
  });
};
