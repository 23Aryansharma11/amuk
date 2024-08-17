const config = {
    endPoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT),
    database: String(import.meta.env.VITE_APPWRITE_DATABASE),
    collection:{
        post: String(import.meta.env.VITE_APPWRITE_COLLECTION_POST),
        postReview: String(import.meta.env.VITE_APPWRITE_COLLECTION_POST_Review),
        postFeedback: String(import.meta.env.VITE_APPWRITE_COLLECTION_POST_FEEDBACK),
    },
    bucket: String(import.meta.env.VITE_APPWRITE_BUCKET),
}

export default config;