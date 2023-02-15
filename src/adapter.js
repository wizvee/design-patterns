class RoundHole {
    constructor(radius) {
        this.radius = radius;
    }
    fits(peg) {
        return this.radius >= peg.radius;
    }
}
class RoundPeg {
    constructor(radius) {
        this.radius = radius;
    }
}
class SquarePeg {
    constructor(width) {
        this.width = width;
    }
}
class SquarePegAdapter extends RoundPeg {
    constructor(peg) {
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
