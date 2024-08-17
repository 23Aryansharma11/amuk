import config from "./config.appwrite";
import { Client, ID, Databases } from "appwrite";

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
}

const userService = new UserService();
export default userService;

// Todo: change store values
