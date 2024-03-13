const { firstModal } = require("../../blocks/modal");
const { plainTextInput } = require("../../blocks/textInput");
const { firstView, noViewUpdated, thanksView } = require("../../blocks/view");

module.exports.register = (app) => {
  app.action("static_select_action", async ({ ack, body, say }) => {
    await ack();

    let answer = body.actions[0].selected_option.value;

    if (answer === "yes") {
      await say("Thank you for your time. Have a good day!");
    } else if (answer === "no") {
      let response = plainTextInput();
      await say(response);
    }
    // await say(`Answer: ${answer} by <@${body.user.id}>`);
  });

  app.action("ok", async ({ ack, body, say }) => {
    await ack();
    console.log(body);
    await say(`Button clicked by <@${body.user.id}>`);
  });

  app.action("label", async ({ ack, body, say }) => {
    await ack();
    console.log(body);

    console.log(JSON.stringify(body.state.values));

    let keys = Object.keys(body.state.values);
    let keys2 = Object.keys(body.state.values[keys[0]]);
    let input = body.state.values[keys[0]][keys2[0]].value;

    await say(`Label: ${input} by <@${body.user.id}>`);
  });

  app.action("open_modal_button", async ({ ack, body, client }) => {
    await ack();

    try {
      const result = await client.views.open(firstView(body.trigger_id));
    } catch (error) {
      console.error(error);
    }
  });

  app.action("first_modal", async ({ ack, body, client }) => {
    await ack();
    console.log("body", JSON.stringify(body));

    let answer = body.actions[0].selected_option.value;
    console.log("answer", answer);

    if (answer === "yes") {
      await client.chat.postMessage({
        channel: body.channel.id,
        text: "Thank you for your time. Have a good day!",
      });
    } else if (answer === "no") {
      await client.chat.postMessage({
        channel: body.channel.id,
        text: "I'm sorry to hear that. What's wrong?",
      });
    }
  });

  app.action("decision_select", async ({ ack, body, client, action }) => {
    await ack();

    if (action.selected_option.value === "no") {
      if (body.view.blocks.length == 1) {
        let newView = {};
        newView.blocks = body.view.blocks;

        newView.blocks.push(...noViewUpdated().blocks);
        newView.callback_id = noViewUpdated().callback_id;
        newView.title = noViewUpdated().title;
        newView.submit = noViewUpdated().submit;
        newView.close = noViewUpdated().close;
        newView.type = noViewUpdated().type;

        console.log("newView", JSON.stringify(newView));

        await client.views.update({
          view_id: body.view.id,
          view: newView,
        });
      }
    } else if (action.selected_option.value === "yes") {
      let newView = {};
      newView.blocks = body.view.blocks;
      newView.submit = {
        type: "plain_text",
        text: "Submit",
        emoji: true,
      };
      newView.close = {
        type: "plain_text",
        text: "Cancel",
        emoji: true,
      };
      // newView.
      await client.views.update({
        view_id: body.view.id,
        view: thanksView(),
      });
    }
  });

  app.view("no_view_id", async ({ ack, body, client }) => {
    await ack();

    console.log("body", JSON.stringify(body));

    let input = body.view.state.values.block_no_id.info_input.value;
    console.log("input", input);

    await client.views.update({
      view_id: body.view.id,
      view: thanksView(),
    });
  });
};
