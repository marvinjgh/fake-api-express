import {randomPerson} from "../utils/generators.js";

export function people(req, res, next) {

  let following = [];
  let suggestion = [];

  let randomFollowings = Math.max(1, Math.floor(Math.random() * 10));
  let randomSuggestions = Math.max(1, Math.floor(Math.random() * 5));

  for (let i = 0; i < randomFollowings; i++) {
    following.push(randomPerson(true));
  }
  for (let i = 0; i < randomSuggestions; i++) {
    suggestion.push(randomPerson(false));
  }

  res.status(200).send({
    following,
    suggestion,
  });

  next();
}
