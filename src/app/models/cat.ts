import { BlackAllele, DiluteAllele, OrangeAllele, X, Y } from './chromosome';

export class Cat {
	color: Color | null = null;
	genes: Array<X | Y>;
	sex: Sex;
	isDilute: boolean;

	constructor(genes: Array<X | Y>) {
		this.genes = genes;

		// determine sex by presence of orange gene
		if (this.genes[0].orange && this.genes[1].orange) {
			this.sex = Sex.Female;
		} else {
			this.sex = Sex.Male;
		}

		// determine color from black, orange, dilute
		const recessive = DiluteAllele.d;
		const nameOfRecessive = `${DiluteAllele[recessive]}`;
		const dilute1 = `${this.genes[0].dilute}`;
		const dilute2 = `${this.genes[1].dilute}`;

		this.isDilute = dilute1 === nameOfRecessive && dilute2 === nameOfRecessive;
		
		if (this.sex === Sex.Female && (
			(this.genes[0].orange !== this.genes[1].orange)
		)) {
			this.color = Color.Tortishell;
		} else {
			const orange = OrangeAllele.O;
			const nameOfOrange = `${OrangeAllele[orange]}`;
			if (`${this.genes[0].orange}` === nameOfOrange) {
				this.color = Color.Orange;
			} else {
				this.color = Color.Black;
			}
		}
	}
}

enum Color {
	Black = 'Black',
	Orange = 'Orange',
	Tortishell = 'Tortishell'
}

enum Sex {
	Female = 'female',
	Male = 'male'
}