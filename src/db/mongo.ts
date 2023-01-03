import {MongoClient} from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);

export function start_mongo(): Promise<MongoClient> {
    console.log('Starting...');
    return client.connect();
}

export default client.db('psightings');