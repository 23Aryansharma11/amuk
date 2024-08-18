import config from "./config.appwrite";
import { Client, Account, ID } from "appwrite";
import userService from "./user.appwrite";

class AuthService {
  client: Client = new Client();
  account: Account | undefined;

  constructor() {
    this.client.setEndpoint(config.endPoint).setProject(config.projectId);
    this.account = new Account(this.client);
  }

  // Signup
  async signUpUser(name: string, email: string, password: string) {
    try {
      //   Create account
      const userAccount = await this.account?.create(
        ID.unique(),
        email,
        password,
        name
      );

      //   Save user to database
      const user = await userService.createUser(
        String(userAccount?.$id),
        String(userAccount?.name),
        String(userAccount?.email)
      );
      return user;
    } catch (error) {
      console.log("Error during signup: ", error);
      throw error;
    }
  }

  // Signin
  async signInUser(email: string, password: string) {
    try {
      const userSession = await this.account?.createEmailPasswordSession(
        email,
        password
      );
      const userData = await userService.fetchUser(String(userSession?.userId));
      
      return userData;
    } catch (error) {
      console.log("Error during signin: ", error);
      throw error;
    }
  }

  // Signout
  async signOutUser() {
    try {
      const userSession = await this.account?.deleteSessions();
      return userSession;
    } catch (error) {
      console.log("Error during signout: ", error);
      throw error;
    }
  }

  // Get User
  async getUser() {
    try {
      const user = await this.account?.get();
      console.log("user: ", user);
      return user;
    } catch (error) {
      console.log("Error during get user: ", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;

// Todo: change store values
