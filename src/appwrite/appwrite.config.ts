import { Client } from "appwrite";
// Create new Client
const client = new Client();

// Set endpoint and project
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('amuk');

export {
    client
}