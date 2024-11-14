export const alleles = ['black', 'dilute', 'orange', 'white', 'agouti', 'ticked', 'tabby', 'spotted', 'colorpoint'] as const;
export type Allele = typeof alleles[number];

export class Chromosome {
	name: string;
	allele: string;

	generateAllele(types: Array<string>) {
		const length = Object.keys(types).length;
		const index = Math.floor(Math.random() * length);
		this.allele = types[index];
	}

	constructor(types: Array<string>, name: string) {
		this.name = name;
		this.generateAllele(types);
	}
}

export type Gene = Record<Allele, Chromosome>;

export class X {
	readonly type: string = 'X';
	black: Chromosome = new Chromosome(blackAlleles, 'Black');
	dilute: Chromosome = new Chromosome(diluteAlleles, 'Dilute');
	orange: Chromosome = new Chromosome(orangeAlleles, 'Orange');
	white: Chromosome = new Chromosome(whiteAlleles, 'White');
	agouti: Chromosome = new Chromosome(agoutiAlleles, 'Agouti');
	ticked: Chromosome = new Chromosome(tickedAlleles, 'Ticked');
	tabby: Chromosome = new Chromosome(tabbyAlleles, 'Tabby');
	spotted: Chromosome = new Chromosome(spottedAlleles, 'Spotted');
	colorpoint: Chromosome = new Chromosome(colorpointAlleles, 'Colorpoint');

	constructor(x?: Partial<X>) {
		Object.assign(this, x);
	}
}

export class Y {
	readonly type: string = 'Y';
	black: Chromosome = new Chromosome(blackAlleles, 'Black');
	dilute: Chromosome = new Chromosome(diluteAlleles, 'Dilute');
	readonly orange = null;
	white: Chromosome = new Chromosome(whiteAlleles, 'White');
	agouti: Chromosome = new Chromosome(agoutiAlleles, 'Agouti');
	ticked: Chromosome = new Chromosome(tickedAlleles, 'Ticked');
	tabby: Chromosome = new Chromosome(tabbyAlleles, 'Tabby');
	spotted: Chromosome = new Chromosome(spottedAlleles, 'Spotted');
	colorpoint: Chromosome = new Chromosome(colorpointAlleles, 'Colorpoint');

	constructor(y?: Partial<Y>) {
		Object.assign(this, y);
	}
}

export const blackAlleles = [ 'B', 'b', 'b1' ];
export const diluteAlleles = [ 'D', 'd' ];
export const orangeAlleles = [ 'O', 'o' ];
export const whiteAlleles = [ 'W', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'Ws', 'wg', 'wg', 'wg', 'w', 'w', 'w', 'w', 'w', 'w' ];
export const agoutiAlleles = [ 'A', 'a' ];
export const tickedAlleles = [ 'TiA', 'Ti+', 'Ti+', 'Ti+', 'Ti+', 'Ti+', 'Ti+', 'Ti+', 'Ti+', 'Ti+' ];
export const tabbyAlleles = [ 'TaM', 'tab' ];
export const spottedAlleles = [ 'Sp', 'sp' ];
export const colorpointAlleles = [ 'C', 'Cs', 'Cb', 'ca', 'c' ];
