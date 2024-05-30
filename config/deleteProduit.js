const cron = require('node-cron');
const { MongoClient } = require('mongodb');

const uri = ' mongodb+srv://all:mongomongo@sera.50wxxcf.mongodb.net/?retryWrites=true&w=majority&appName=sera'; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function deleteOldTasks() {
  try {
    await client.connect();
    const database = client.db('test'); // Replace with your database name
    const collection = database.collection('sera'); // Replace with your collection name

    const fiveHoursAgo = new Date(Date.now() - 5 * 1000); // Calculate the time 5 hours ago

    const deleteResult = await collection.deleteMany({ createdAt: { $lte: fiveHoursAgo } });

    console.log(`Deleted ${deleteResult.deletedCount}  successfully.`);
  } catch (err) {
    console.error('Error during deletion task:', err);
  } finally {
    await client.close();
  }
}

// Schedule the task to run every 5 minutes
cron.schedule('*/5 * * * *', deleteOldTasks);
