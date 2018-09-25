export class WordProblem {
  constructor(question) {
    this.question = question;
  }
  answer() {
    const numbersArray = this.extractNumbers();
    const operator = this.extractOperator();
    if (operator === 'plus') {
      return numbersArray.reduce((prev, curr) => {
        const newPrev = prev + curr;
        return newPrev;
      }, 0);
    } else if (operator === 'minus') {
      return numbersArray[0] - numbersArray[1];
    } else if (operator === 'multiplied') {
      return numbersArray[0] * numbersArray[1];
    } return numbersArray[0] / numbersArray[1];
  }

  extractOperator() {
    return this.question.split(' ')[3];
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
