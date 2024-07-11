const { MongoClient } = require("mongodb");

// Create an instance of MongoClient for MongoDB
const client = new MongoClient("mongodb://127.0.0.1:27017/nodemongo");

async function main() {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected Successfully & Database Created!");

    // Get the database
    const dbo = client.db("nodemongo");

    // Sample data to insert
    var custData = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Amy", address: "Apple st 652" },
      { name: "Hannah", address: "Mountain 21" },
      { name: "Michael", address: "Valley 345" },
      { name: "Sandy", address: "Ocean blvd 2" },
      { name: "Betty", address: "Green Grass 1" },
      { name: "Richard", address: "Sky st 331" },
      { name: "Susan", address: "One way 98" },
      { name: "Vicky", address: "Yellow Garden 2" },
      { name: "Ben", address: "Park Lane 38" },
      { name: "William", address: "Central st 954" },
      { name: "Chuck", address: "Main Road 989" },
      { name: "Viola", address: "Sideway 1633" },
    ];

    // Insert multiple documents
    const result = await dbo.collection("customers").insertMany(custData);
    console.log(`${result.insertedCount} documents inserted`);

  } catch (error) {
    console.error("Failed to perform operations", error);
  } finally {
    // Close the database connection
    await client.close();
  }
}

main().catch(console.error);
