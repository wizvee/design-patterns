class RoundHole {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public fits(peg: RoundPeg) {
    return this.radius >= peg.radius;
  }
}

class RoundPeg {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class SquarePeg {
  public width: number;

  constructor(width: number) {
    this.width = width;
  }
}

class SquarePegAdapter extends RoundPeg {
  private peg: SquarePeg;
  public radius: number;

  constructor(peg: SquarePeg) {
    const radius = (peg.width * Math.sqrt(2)) / 2;
    super(radius);
    this.peg = peg;
  }
}

const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);
console.log(hole.fits(rpeg));

const small_sqpeg = new SquarePeg(5);
const large_sqpeg = new SquarePeg(10);

const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
console.log(hole.fits(small_sqpeg_adapter));
console.log(hole.fits(large_sqpeg_adapter));
