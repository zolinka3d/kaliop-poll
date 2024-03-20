module.exports.modal = (callback_id, title_text) => {
  return {
    type: "modal",
    callback_id: callback_id,
    title: {
      type: "plain_text",
      text: title_text,
    },
    blocks: [],
  };
};

module.exports.modalWithSubmitButtons = (callback_id, title_text) => {
  let modal = this.modal(callback_id, title_text);
  modal.submit = {
    type: "plain_text",
    text: "Wyślij",
    emoji: true,
  };
  modal.close = {
    type: "plain_text",
    text: "Anuluj",
    emoji: true,
  };
  return modal;
};
