const AWS = require("aws-sdk");

const { v4: uuidv4 } = require("uuid");

AWS.config.update({ region: "eu-central-1" });

const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.saveItem = (item, callback) => {
  const params = {
    TableName: "kaliop-poll",
    Item: {
      id: { S: uuidv4() },
      item: { S: item },
    },
  };
  ddb.putItem(params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
