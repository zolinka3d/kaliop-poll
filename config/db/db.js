const AWS = require("aws-sdk");

const region = "eu-central-1";
module.exports.dynamoDBClient = new AWS.DynamoDB({ region });
