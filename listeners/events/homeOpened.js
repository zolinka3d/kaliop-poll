module.exports.homeOpened = (app) => {
	app.event("app_home_opened", async ({ event, client, logger }) => {
		try {
			const result = await client.views.publish({
				user_id: event.user,
				view: {
					type: "home",
					blocks: [
						{
							type: "section",
							text: {
								type: "mrkdwn",
								text: "*Welcome home, <@" + event.user + "> :house:*",
							},
						},
						{
							type: "section",
							text: {
								type: "mrkdwn",
								text: "Go to messages if you want to talk to Moody.",
							},
						},
					],
				},
			});

			logger.info(result);
		} catch (error) {
			logger.error(error);
		}
	});
};
