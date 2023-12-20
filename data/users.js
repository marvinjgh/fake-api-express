import { v4 as uuidv4 } from "uuid";

/**
 * @typedef User
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} username
 * @property {string} email
 * @property {string} password
 * @property {string} avatar
 */

class Users {
  constructor() {
    /** @type {Array<User>} */
    this.data = [];
  }

  /**
   * Add a new user to the list of users.
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @param {string} avatar
   * @throws EmailDuplicate if the email is already in use
   * @throws UsernameDuplicate if the username is already in use
   * @returns {User}
   */
  add(firstName, lastName, username, email, password, avatar) {
    var user = {
      id: uuidv4(),
      firstName,
      lastName,
      username,
      email,
      password,
      avatar,
    };

    if (this.data.filter((user) => user.email === email).length > 0) {
      throw { name: "EmailDuplicate", message: "Email already in use" };
    }
    if (this.data.filter((user) => user.username === username).length > 0) {
      throw { name: "UsernameDuplicate", message: "Username already in use" };
    }

    this.data.push(user);
    return user;
  }

  /**
   * Get a user by their id.
   * @param {string} id 
   * @returns {User | undefined}
   */
  getUserById(id) {
    return this.data.filter((user) => user.id === id)[0];
  }

  /**
   * Get a user by their email.
   * @param {string} email 
   * @returns {User | undefined}
   */
  getUserByEmail(email) {
    return this.data.filter((user) => user.email === email)[0];
  }
}

const users = new Users();
export default users;
