import config from "./config.appwrite";
import { Client, ID, Databases, Query } from "appwrite";

class PostService {
  client: Client = new Client();
  database: Databases | undefined;

  constructor() {
    this.client.setEndpoint(config.endPoint).setProject(config.projectId);
    this.database = new Databases(this.client);
  }
  async createPost(userId: string, title: string, description: string = "") {
    try {
      const post = await this.database?.createDocument(
        config.database,
        config.collection.post,
        ID.unique(),
        {
          user: userId,
          title,
          description,
          createdAt: new Date().toISOString(),
        }
      );
      return post;
    } catch (error) {
      console.log("Error creating post: ", error);
    }
  }
  async getMyPosts(userId: string) {
    try {
      const posts = await this.database?.listDocuments(
        config.database,
        config.collection.post,
        [Query.equal("user", String(userId))]
      );
      return posts;
    } catch (error) {
      console.log("Error getting my posts: ", error);
    }
  }
  async getPost(postId: string) {
    try {
      const post = await this.database?.getDocument(
        config.database,
        config.collection.post,
        postId
      );
      return post;
    } catch (error) {
      console.log("Error getting post: ", error);
    }
  }
  async deletePost(postId: string) {
    try {
      const post = await this.database?.deleteDocument(
        config.database,
        config.collection.post,
        postId
      );
      return post;
    } catch (error) {
      console.log("Error deleting post: ", error);
    }
  }
  async updatePost(postId: string, title: string, description: string) {
    try {
      const post = await this.database?.updateDocument(
        config.database,
        config.collection.post,
        postId,
        {
          title,
          description,
        }
      );
      return post;
    } catch (error) {
      console.log("Error updating post: ", error);
    }
  }
}

const postService = new PostService();
export default postService;
