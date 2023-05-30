import { connect, connection, mongo } from "mongoose";

const conn = {
  isConnected: false,
};
export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(
    "mongodb+srv://gabg4224:Zg2I5zna9kjS31w0@rabe.imea5lo.mongodb.net/Nuevo?retryWrites=true&w=majority"
  );

conn.isConnected =  db.connections[0].readyState
console.log(db.connection.db.databaseName)
}
connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

connection.on("error", (err) => {
  console.log(err);
});
