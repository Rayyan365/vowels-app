function countVowels(word) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const word = "fikrcamp";
  const numberOfVowels = countVowels(word);
  console.log(numberOfVowels);
