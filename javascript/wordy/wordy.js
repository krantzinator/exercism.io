export class WordProblem {
  constructor(question) {
    this.question = question;
  }
  answer() {
    const numbersArray = this.extractNumbers();
    const operators = this.extractOperators();
    // ['plus', 'minus']

    if (operators.length > 1) {
      var returnVal = numbersArray.reduce((acc, val, i) => {
        if (i === 0) {
          return acc = acc + val;
        } else if (operators[i - 1] === 'plus') {
          return acc = acc + val;
        } else if (operators[i - 1] === 'minus') {
          return acc = acc - val;
          }
        }, 0)
    } else {
      if (operators[0] === 'plus') {
        return numbersArray[0] + numbersArray[1];
      } else if (operators[0] === 'minus') {
        return numbersArray[0] - numbersArray[1];
      } else if (operators[0] === 'multiplied') {
        return numbersArray[0] * numbersArray[1];
      } return numbersArray[0] / numbersArray[1];
    }

    return returnVal;
  }

  extractOperators() {
    return this.question.split(' ').filter(words => words.includes('plus') || words.includes('minus') || words.includes('multiplied') || words.includes('divided'))
  }

  extractNumbers() {
    return this.question.match(/-*[0-9]+/g).map(item => Number(item));
  }
}

export class ArgumentError {
  constructor(question) {
    this.question = question;
  }
  answer() {
    return this.question;
  }
}
