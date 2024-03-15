const { firstView, noViewUpdated, thanksView } = require("../../blocks/view");
const { openView, updateView } = require("../../templates/views/views");
const { modal } = require("../../templates/modals/modal");

module.exports.register = (app) => {
  app.action("open_modal_button", async ({ ack, body, client }) => {
    await ack();

    try {
      const result = await client.views.open(firstView(body.trigger_id));
    } catch (error) {
      console.error(error);
    }
  });

  app.action("decision_select", async ({ ack, body, client, action }) => {
    await ack();

    if (action.selected_option.value === "no") {
      if (body.view.blocks.length == 1) {
        let noViewUpdate = noViewUpdated(body.view.id);

        console.log("newView", JSON.stringify(noViewUpdate));

        await client.views.update(noViewUpdate);
      }
    } else if (action.selected_option.value === "yes") {
      let newView = thanksView(body.view.id);
      await client.views.update(newView);
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

  app.action("test_view", async ({ ack, body, client }) => {
    await ack();

    let newModal = modal("modal-identifier", "Hello!");
    let view = openView(body.trigger_id, newModal);
    console.log("test view:", JSON.stringify(view));
    try {
      const result = await client.views.open(view);
    } catch (error) {
      console.error(error);
    }
  });
};
