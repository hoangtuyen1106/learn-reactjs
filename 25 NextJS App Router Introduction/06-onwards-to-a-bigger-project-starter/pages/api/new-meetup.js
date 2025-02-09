import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://hoangtuyen1106:96j7DtL2CZeOeyhv@our-first-user.mnbdv.mongodb.net/meetups?retryWrites=true&w=majority&appName=our-first-user"
        );
        const db = client.db();

        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;
