export class Beer {
  constructor() {
  }
  subtractedBeer(number) {
    return number === 1 ? 'no more' : number - 1;
  }
  isIt(number) {
    return number === 1 ? 'it' : 'one';
  }
  bottle(number) {
    return number === 1 ? 'bottle' : 'bottles';
  }
  verse(numOfBeers) {
    // we'll use an interpolated string
    // return `#{this.numberOfBeers}` and {this.numberOfBeers - 1}
    return `${numOfBeers} ${this.bottle(numOfBeers)} of beer on the wall, ${numOfBeers} ${this.bottle(numOfBeers)} of beer.
Take ${this.isIt(numOfBeers)} down and pass it around, ${this.subtractedBeer(numOfBeers)} bottles of beer on the wall.
`
  }
}

export default new Beer;
