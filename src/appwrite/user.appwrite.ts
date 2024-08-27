import config from "./config.appwrite";
import { Client, ID, Databases, Query } from "appwrite";

class UserService {
  client: Client = new Client();
  database: Databases | undefined;

  constructor() {
    this.client.setEndpoint(config.endPoint).setProject(config.projectId);
    this.database = new Databases(this.client);
  }
  async createUser(userId: string, name: string, email: string) {
    try {
      const user = await this.database?.createDocument(
        config.database,
        config.collection.user,
        ID.unique(),
        {
          userId,
          name,
          email,
        }
      );
      return user;
    } catch (error) {
      console.log("Error Creating user: ", error);
    }
  }

  async fetchUser(userId: string) {
    try {
      console.log(userId);
      const userData = await this.database?.listDocuments(
        config.database,
        config.collection.user,
        [Query.equal("$id", userId)]
      );
      return userData?.documents[0];
    } catch (error) {
      console.log("Error Fetching user: ", error);
    }
  }
}

const userService = new UserService();
export default userService;
