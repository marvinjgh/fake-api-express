/**
 *
 * @typedef Post
 * @property {string} id
 * @property {string} image
 * @property {string} description
 * @property {import('./users.js').User} user
 */

class SavedPostData {
  constructor() {
    /** @type {Map<string,Array<Post>>} */
    this.data = new Map();
  }

  /**
   * Add a post to the list of saved by a user.
   * @param {string} key
   * @param {string} post
   * @returns
   */
  add(key, post) {
    if (this.data.has(key)) {
      let posts = this.data.get(key);
      for (let index = 0; index < posts.length; index++) {
        if (posts[0].id == post.id) {
          return;
        }
      }
      posts.push(post);
    } else {
      this.data.set(key, [post]);
    }
  }

  /**
   * Get the list of saved post of a user.
   * @param {string} id
   * @returns {Array[Post]}
   */
  getUserSaved(id) {
    return this.data.get(id) || [];
  }
}

const savedData = new SavedPostData();
export default savedData;
