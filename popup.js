const textInput = document.getElementById('textInput');
const wordCountElem = document.getElementById('wordCount');
const charCountElem = document.getElementById('charCount');
const sentenceCountElem = document.getElementById('sentenceCount');
const readTimeElem = document.getElementById('readTime');

textInput.addEventListener('input', () => {
  const text = textInput.value;

  // Characters count
  const charCount = text.length;
  charCountElem.textContent = charCount;

  // Words count
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  wordCountElem.textContent = wordCount;

  // Sentences count (splitting by . ! ?)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCountElem.textContent = sentences.length;

  // Reading time (average 200 words per minute -> ~3.3 words per second)
  const seconds = Math.ceil(wordCount / 3.3);
  if (seconds < 60) {
    readTimeElem.textContent = seconds + "s";
  } else {
    const minutes = (seconds / 60).toFixed(1);
    readTimeElem.textContent = minutes + "m";
  }
});