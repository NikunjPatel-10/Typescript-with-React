import MeetupList from './../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';


// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'First Meetup',
//         image: 'https://plus.unsplash.com/premium_photo-1661338864650-d44b165f8056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
//         address: 'Some address 5 , 12345 Some city',
//         description: 'This is first meetup'

//     },
//     {
//         id: 'm2',
//         title: 'Second Meetup',
//         image: 'https://plus.unsplash.com/premium_photo-1661338864650-d44b165f8056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
//         address: 'Some address 5 , 12345 Some city',
//         description: 'This is Second meetup'

//     }
// ]
function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://nikunjpatel:nikunj7452@cluster0.skpu7ya.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find().toArray();
    console.log(meetups);
    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}


export default HomePage