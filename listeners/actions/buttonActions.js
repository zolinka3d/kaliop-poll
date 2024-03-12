const { firstModal } = require("../../blocks/modal");
const { plainTextInput } = require("../../blocks/textInput");

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
    // Potwierdź akcję
    await ack();

    try {
      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: {
          type: "modal",
          callback_id: "yes_no_modal",
          title: {
            type: "plain_text",
            text: "Ok?",
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Is everything OK?",
              },
              accessory: {
                type: "static_select",
                placeholder: {
                  type: "plain_text",
                  text: "Wybierz opcję",
                },
                options: [
                  {
                    text: {
                      type: "plain_text",
                      text: "Yes",
                    },
                    value: "yes",
                  },
                  {
                    text: {
                      type: "plain_text",
                      text: "No",
                    },
                    value: "no",
                  },
                ],
                action_id: "decision_select",
              },
            },
          ],
        },
      });
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

    console.log("body: ", JSON.stringify(body));
    console.log("action: ", JSON.stringify(action));
    if (action.selected_option.value === "no") {
      await client.views.update({
        view_id: body.view.id,
        view: {
          type: "modal",
          callback_id: "yes_no_modal_updated",
          title: {
            type: "plain_text",
            text: "We're sorry to hear that",
          },
          submit: {
            type: "plain_text",
            text: "Submit",
            emoji: true,
          },
          close: {
            type: "plain_text",
            text: "Cancel",
            emoji: true,
          },
          blocks: [
            {
              type: "input",
              block_id: "additional_info",
              element: {
                type: "plain_text_input",
                action_id: "info_input",
                multiline: true,
              },
              label: {
                type: "plain_text",
                text: "Tell us more about the problem: ",
              },
            },
          ],
        },
      });
    } else if (action.selected_option.value === "yes") {
      // Jeśli użytkownik wybierze "Tak", możemy zakończyć modal lub podjąć inną akcję
      // Tutaj można dodać logikę, co zrobić, gdy użytkownik wybierze "Tak"

      // close modal
      await client.views.update({
        view_id: body.view.id,
        view: {
          type: "modal",
          callback_id: "yes_no_modal_updated",
          title: {
            type: "plain_text",
            text: "Thank you!",
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Thank you for your time. Have a good day!",
              },
            },
          ],
        },
      });
    }
  });
};
