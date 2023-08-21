class Chromosome {

	static generateAllele(type: any) {
		const length = Object.keys(type).length / 2;
		const index = Math.floor(Math.random() * length);
		return type[index];
	}

	constructor() {}
}

export class X {
	black: BlackAllele = Chromosome.generateAllele(BlackAllele);
	dilute: DiluteAllele = Chromosome.generateAllele(DiluteAllele);
	orange: RedAllele = Chromosome.generateAllele(OrangeAllele);

	constructor(x?: Partial<X>) {
		Object.assign(this, x);
	}
}

export class Y {
	black: BlackAllele = Chromosome.generateAllele(BlackAllele);
	dilute: DiluteAllele = Chromosome.generateAllele(DiluteAllele);

	constructor(y?: Partial<Y>) {
		Object.assign(this, y);
	}
}

enum BlackAllele {
	B,
	b,
	b1
}

enum DiluteAllele {
	D,
	d
}

enum OrangeAllele {
	O,
	o
}