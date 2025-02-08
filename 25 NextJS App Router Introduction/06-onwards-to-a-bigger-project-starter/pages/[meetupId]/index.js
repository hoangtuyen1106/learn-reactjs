import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <>
            <MeetupDetails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://hoangtuyen1106:96j7DtL2CZeOeyhv@our-first-user.mnbdv.mongodb.net/meetups?retryWrites=true&w=majority&appName=our-first-user"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    client.close();
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
        "mongodb+srv://hoangtuyen1106:96j7DtL2CZeOeyhv@our-first-user.mnbdv.mongodb.net/meetups?retryWrites=true&w=majority&appName=our-first-user"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address:selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        },
    };
}

export default MeetupDetails;
