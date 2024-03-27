const { v4: uuidv4 } = require("uuid");
module.exports.Poll = class Poll {
	constructor(name, language, startDate, dueDate, creator) {
		this.id = {
			S: uuidv4(),
		};
		this.name = {
			S: name,
		};

		this.language = {
			S: language,
		};
		this.answers = {
			L: [],
		};
		this.startDate = {
			S: startDate,
		};

		this.dueDate = {
			S: dueDate,
		};
		this.creator = {
			S: creator,
		};
	}
};

module.exports.Answer = class Answer {
	constructor(user, mood, details, date, pollId) {
		this.id = {
			S: uuidv4,
		};
		this.user = {
			S: user,
		};
		this.mood = {
			S: mood,
		};
		this.details = {
			S: details,
		};
		this.date = {
			S: date,
		};
		this.pollId = {
			S: pollId,
		};
	}
};
