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
	orange: OrangeAllele = Chromosome.generateAllele(OrangeAllele);

	constructor(x?: Partial<X>) {
		Object.assign(this, x);
	}
}

export class Y {
	black: BlackAllele = Chromosome.generateAllele(BlackAllele);
	dilute: DiluteAllele = Chromosome.generateAllele(DiluteAllele);
	readonly orange = null;

	constructor(y?: Partial<Y>) {
		Object.assign(this, y);
	}
}

export enum BlackAllele {
	B,
	b,
	b1
}

export enum DiluteAllele {
	D,
	d
}

export enum OrangeAllele {
	O,
	o
}