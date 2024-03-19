const { WebClient } = require("@slack/web-api");

// Initialize a WebClient instance
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

// Function to find channels by user ID
module.exports.findChannelsByUserId = async (userId) => {
  try {
    // Call the conversations.list method with the user ID
    const result = await web.conversations.list({
      types: "private_channel", // Include public and private channels
      limit: 100, // Maximum number of channels to retrieve (adjust as needed)
    });

    // Check if the request was successful
    if (result.ok) {
      // Filter channels to find those in which the user is a member
      const userChannels = result.channels.filter((channel) =>
        channel.members.includes(userId)
      );

      // Return the list of channels
      return userChannels;
    } else {
      // Log error if request was not successful
      console.error("Error fetching channels:", result.error);
      return null;
    }
  } catch (error) {
    // Handle any errors
    console.error("Error fetching channels:", error);
    return null;
  }
};
