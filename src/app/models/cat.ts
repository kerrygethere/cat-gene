import { whiteAlleles, X, Y } from './chromosome';

export class Cat {
	color: Color | null = null;
	genes: Array<X | Y>;
	sex: Sex;
	spotting: number = 0;
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
		this.spotting = whiteAlleles.indexOf(this.genes[0].white) * whiteAlleles.indexOf(this.genes[1].white);

		const dilute1 = this.genes[0].dilute;
		const dilute2 = this.genes[1].dilute;

		this.isDilute = dilute1 === 'd' && dilute2 === 'd';

		if (this.genes[0].white === 'W' || this.genes[1].white === 'W') {
			this.color = Color.White;
		} else {
			if (this.sex === Sex.Female && this.genes[0].orange !== this.genes[1].orange) {
				if (this.spotting && this.spotting < 100) {
					this.color = Color.Calico;
				} else {
					this.color = Color.Tortishell;
				}
			} else {
				if (`${this.genes[0].orange}` === 'O') {
					this.color = Color.Orange;
				} else {
					if (this.genes[0].black === 'b1' && this.genes[1].black === 'b1') {
						this.color = Color.Cinnamon;
					} else if (this.genes[0].black === 'B' || this.genes[1].black === 'B') {
						this.color = Color.Black;
					} else {
						this.color = Color.Brown;
					}
				}
			}
		}
	}
}

export const litterSize = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8];

enum Color {
	Black = 'Black',
	Brown = 'Brown',
	Calico = 'Calico',
	Cinnamon = 'Cinnamon',
	Orange = 'Orange',
	Tortishell = 'Tortishell',
	White = 'White'
}

enum Sex {
	Female = 'female',
	Male = 'male'
}