function randomPerson(isFollowing) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const avatar = Math.random().toString(16).substring(2, 8);
  const charactersLength = characters.length;

  const randomChar = () =>
    characters.charAt(Math.floor(Math.random() * charactersLength));
  const nameLen = () => Math.max(1, Math.floor(Math.random() * 20));
  let name = "";

  for (let i = 0; i < nameLen(); i++) {
    name += randomChar();
  }

  return {
    avatar: `https://singlecolorimage.com/get/${avatar}/64x64`,
    name: `${name.charAt(0).toUpperCase()}${name.substring(1)}`,
    following: isFollowing,
  };
}

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
