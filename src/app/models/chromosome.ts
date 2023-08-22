class Chromosome {

	static generateAllele(type: any) {
		const length = Object.keys(type).length;
		const index = Math.floor(Math.random() * length);
		return type[index];
	}

	constructor() {}
}

export class X {
	black: string = Chromosome.generateAllele(blackAlleles);
	dilute: string = Chromosome.generateAllele(diluteAlleles);
	orange: string = Chromosome.generateAllele(orangeAlleles);
	white: string = Chromosome.generateAllele(whiteAlleles);

	constructor(x?: Partial<X>) {
		Object.assign(this, x);
	}
}

export class Y {
	black: string = Chromosome.generateAllele(blackAlleles);
	dilute: string = Chromosome.generateAllele(diluteAlleles);
	readonly orange = '';
	white: string = Chromosome.generateAllele(whiteAlleles);

	constructor(y?: Partial<Y>) {
		Object.assign(this, y);
	}
}

export const blackAlleles = [ 'B', 'b', 'b1' ];
export const diluteAlleles = [ 'D', 'd' ];
export const orangeAlleles = [ 'O', 'o' ];
export const whiteAlleles = [ 'W', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'wg', 'wg', 'wg', 'w', 'w', 'w', 'w', 'w', 'w' ];
														// 0		1																										  10								13
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