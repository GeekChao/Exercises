class Node {
  constructor(letter) {
    this.letter = letter;
    this.children = {};
    this.terminus = false;
  }

  get letters() {
    return Object.keys(this.children);
  }

  _getSuggestions(str, suggestions = []) {
    if (!this.letters.length) {
      suggestions.push(str);

      return suggestions;
    }

    if (this.terminus) {
      suggestions.push(str);
    }

    if (suggestions.length >= 3) return suggestions;

    for (let [letter, child] of Object.entries(this.children)) {
      child._getSuggestions(str + letter, suggestions);
    }

    return suggestions;
  }

  complete(str) {
    // find the node that starts with the given str
    let prefix = str;
    let currentNode = this;

    while (prefix.length) {
      const letter = prefix[0];

      currentNode = currentNode.children[letter.toLowerCase()];

      // no matching prefix
      if (!currentNode) return [];

      prefix = prefix.slice(1);
    }

    return currentNode._getSuggestions(str);
  }

  add(word) {
    if (!word.length) {
      this.terminus = true;

      return;
    }

    const letter = word[0];

    if (this.letters.includes(letter)) {
      this.children[letter].add(word.slice(1));
    } else {
      const newTrieNode = new Node(letter);
      this.children[letter] = newTrieNode;

      newTrieNode.add(word.slice(1));
    }
  }
}

const createTrie = (words) => {
  const root = new Node("");

  words.forEach((word) => root.add(word.toLowerCase()));

  return root;
};
