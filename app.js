const { App, AwsLambdaReceiver } = require("@slack/bolt");

const awsLambdaReceiver = new AwsLambdaReceiver({
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	receiver: awsLambdaReceiver,
});

const { registerListeners } = require("./listeners");
registerListeners(app);

module.exports.handler = async (event, context, callback) => {
	const handler = await awsLambdaReceiver.start();
	return handler(event, context, callback);
};
