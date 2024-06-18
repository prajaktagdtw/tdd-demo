// Reverse the word order for the given text
// eg: This is a block => block a is This

const SPACE = " ";

const lastSpaceIndex = (text: string) => {
  return text.lastIndexOf(SPACE);
};

const restOf = (text: string, index: number) => {
  return text.slice(0, index);
};

const lastWord = (text: string, spaceIndex: number) => {
  return text.slice(spaceIndex + 1);
};

export const reverseWordOrder = (text: string) => {
  let content = text;
  let reversedText = "";

  while (content.includes(SPACE)) {
    const spaceIndex = lastSpaceIndex(content);
    reversedText += lastWord(content, spaceIndex) + SPACE;
    content = restOf(content, spaceIndex);
  }
  return reversedText + content;
};
