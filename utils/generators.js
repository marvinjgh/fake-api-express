import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1,
  },
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
});

function randomWord() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  const randomChar = () =>
    characters.charAt(Math.floor(Math.random() * charactersLength));
  const nameLen = () => Math.max(1, Math.floor(Math.random() * 20));
  let word = "";

  for (let i = 0; i < nameLen(); i++) {
    word += randomChar();
  }

  return word;
}

function randomHexColor() {
  return Math.random().toString(16).substring(2, 8);
}

export function randomPerson(isFollowing) {
  let name = randomWord();

  return {
    avatar: `https://singlecolorimage.com/get/${randomHexColor()}/64x64`,
    name: `${name.charAt(0).toUpperCase()}${name.substring(1)}`,
    following: isFollowing,
  };
}

export function randomPost() {
  return {
    image: `https://singlecolorimage.com/get/${randomHexColor()}/64x64`,
    description: lorem.generateParagraphs(1),
    user: {
      firstName: randomWord(),
      lastName: randomWord(),
      username: randomWord(),
      avatar: `https://singlecolorimage.com/get/${randomHexColor()}/64x64`,
    },
  };
}
