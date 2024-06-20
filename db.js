const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://dbUser:dbUser@cluster0.ojegltu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
// const client = new MongoClient(uri);
// const { MongoClient } = require("mongodb");

// const uri =
//   "mongodb+srv://dbUser:dbUser@cluster0.ojegltu.mongodb.net/?retryWrites=true&w=majority&tls=true";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB cluster");

    // Specify the database name
    const database = client.db("admin-db"); // Replace with your database name
    // console.log(database);
    const collection = database.collection("users");
    // console.log(collection);

    console.log("Connected to database:", database.databaseName);

    collection.findOne().then((data) => {
      console.log(data);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
  //   finally {
  //     // Close the connection
  //     await client.close();
  //   }
}

run().catch(console.error);
