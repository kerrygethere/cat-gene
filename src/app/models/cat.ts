import { whiteAlleles, Chromosome, X, Y } from './chromosome';

export class Cat {
	color: Color | null = null;
	colorpoint: Colorpoint;
	genes: Array<X | Y>;
	isDilute: boolean;
	isSpotted = false;
	sex: Sex;
	spotting: number = 0;
	tabby: Tabby;

	constructor(genes: Array<X | Y>) {
		this.genes = genes;

		// determine sex by presence of orange gene
		if (this.genes[0].type === this.genes[1].type) {
			this.sex = Sex.Female;
		} else {
			this.sex = Sex.Male;
		}

		// determine color from black, orange, dilute
		this.spotting = whiteAlleles.indexOf(this.genes[0].white.allele) * whiteAlleles.indexOf(this.genes[1].white.allele);

		const dilute1 = this.genes[0].dilute;
		const dilute2 = this.genes[1].dilute;

		this.isDilute = dilute1.allele === 'd' && dilute2.allele === 'd';

		// dominant white 
		if (this.genes[0].white.allele === 'W' || this.genes[1].white.allele === 'W') {
			this.color = Color.White;
		} else {
			// female cats can be calico or tortishell
			if (this.sex === Sex.Female && this.genes[0].orange?.allele !== this.genes[1].orange?.allele) {
				if (this.spotting && this.spotting < 100) {
					this.color = Color.Calico;
				} else {
					this.color = Color.Tortishell;
				}
			} else {
				// remaining colors are orange or black
				if (this.genes[0].orange && this.genes[0].orange.allele === 'O') {
					this.color = Color.Orange;
				} else {
					if (this.genes[0].black.allele === 'b1' && this.genes[1].black.allele === 'b1') {
						this.color = Color.Cinnamon;
					} else if (this.genes[0].black.allele === 'B' || this.genes[1].black.allele === 'B') {
						this.color = Color.Black;
					} else {
						this.color = Color.Brown;
					}
				}
			}
		}

		// if agouti or orange, cat is tabby
		if (this.genes[0].agouti.allele === 'A' || this.genes[1].agouti.allele === 'A' || this.color === Color.Orange) {
			if (this.genes[0].ticked.allele === 'TiA' || this.genes[1].ticked.allele === 'TiA') {
				this.tabby = Tabby.Ticked;
			} else {
				if (this.genes[0].tabby.allele === 'TaM' || this.genes[1].tabby.allele === 'TaM') {
					this.tabby = Tabby.Mackerel
				} else {
					this.tabby = Tabby.Classic
				}

				if (this.genes[0].spotted.allele === 'Sp' || this.genes[1].spotted.allele === 'Sp') {
					this.isSpotted = true;
				}
			}
		} else {
			this.tabby = Tabby.Solid;
		}

		// colorpoints
		if (this.genes[0].colorpoint.allele === 'C' || this.genes[1].colorpoint.allele === 'C') {
			this.colorpoint = Colorpoint.None;
		} else if ((this.genes[0].colorpoint.allele === 'c' || this.genes[0].colorpoint.allele === 'ca') &&
				   (this.genes[1].colorpoint.allele === 'c' || this.genes[1].colorpoint.allele === 'ca')) {
			this.colorpoint = Colorpoint.Albino;
		} else {
			if (this.genes[0].colorpoint.allele === 'Cs' && this.genes[1].colorpoint.allele === 'Cs') {
				this.colorpoint = Colorpoint.Colorpoint;
			} else if (this.genes[0].colorpoint.allele === 'Cb' && this.genes[1].colorpoint.allele === 'Cb') {
				this.colorpoint = Colorpoint.Sepia;
			} else {
				this.colorpoint = Colorpoint.Mink;
			}
		}
	}
}

export const litterSize = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8];

export enum Color {
	Black = 'Black',
	Brown = 'Brown',
	Calico = 'Calico',
	Cinnamon = 'Cinnamon',
	Orange = 'Orange',
	Tortishell = 'Tortishell',
	White = 'White'
};

export enum Tabby {
	Mackerel = 'Mackerel',
	Classic = 'Classic',
	Ticked = 'Ticked',
	Solid = 'Solid'
};

export enum Colorpoint {
	None = 'None',
	Colorpoint = 'Colorpoint',
	Mink = 'Mink',
	Sepia = 'Sepia',
	Albino = 'Albino'
}

enum Sex {
	Female = 'female',
	Male = 'male'
};