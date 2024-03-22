module.exports.openView = (trigger_id, modal) => {
	return {
		trigger_id: trigger_id,
		view: modal,
	};
};

module.exports.updateView = (view_id, modal) => {
	return {
		view_id: view_id,
		view: modal,
	};
};
