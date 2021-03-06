import { string } from "prop-types";

export interface IArmorType {
	tag: string;
	name: string;
    crits: {
        [key: string]: number;
    },
	armorMultiplier: {
		clan: number;
		is: number;
	},
	costMultiplier: number;
	introduced: number;
	extinct: number;
	reintroduced: number;
	critLocs?: {
		[key: string]: number;
    };
    available?: boolean;
}


export interface IEngineOption {
	name: string;
	rating: number;
	weight: {
		ice: number;
		cell: number;
		fission: number;
		comp: number;
		standard: number;
		light: number;
		xl: number;
	}
}

export interface ICritialLocations {
	hd?: number,
	ct?: number,
	ra?: number,
	rt?: number,
	rl?: number,
	la?: number,
	lt?: number,
	ll?: number,
}

export interface IEngineType {
	tag: string;
	name: string;
	costMultiplier: number;
	introduced: number;
	extinct: number;
	reintroduced: number;
    criticals?: {
        [key: string]: ICritialLocations;
    },
    rating: number;
    available?: boolean;
}

export interface IDamagePerRange {
    short: number;
    medium: number;
    long: number;
    aeroShort: number;
    aeroMedium: number;
    aeroLong: number;
}

export interface IAccuracyModifier {
    short: number;
    medium: number;
    long: number;
}

export interface IRangeNumbers {
    min?: number;
    short: number;
    medium: number;
    long: number;
    exterme?: number;
}


export interface IEquipmentItem {
    uuid?: string;
    count?: number;
    name: string;
    tag: string;
    sort: string;
    category: string;
    damage?: number | IDamagePerRange;
    damageAero?: number;
    damagePerCluster?: number;
    damageClusters?: number;
    accuracyModifier?: number | IAccuracyModifier;
    ammoBattleValue?: number;
    accuracyModifiier?: number;
    cbills: number;
    introduced: number;
    extinct: number;
    reintroduced: number;
    battleValue?: number;
    heat: number;
    weight: number;
    range: IRangeNumbers,
    space: {
        battlemech: number;
        protomech: number;
        combatVehicle: number;
        supportVehicle: number;
        aerospaceFighter: number;
        smallCraft: number;
        dropShip: number;
    },
    ammoPerTon?: number;
    minAmmoTons?: number;
    explosive?: boolean;
    gauss?: boolean;
    weaponType?: string[];
    techRating?: string;
    unique?: boolean;
    book: string;
    page: number;
    alphaStrike: {
        heat: number;
        rangeShort: number;
        rangeMedium: number;
        rangeLong: number;
        rangeExtreme: number;
        tc: number;
        notes: string[];
    };
    battleValuePerItemDamage?: number;
    requiresHandActuator?: boolean;

    weightDivisor?: number;
    damageDivisior?: number;
    criticalsDivisor?: number;

    variableSize?: boolean;
    isMelee?: boolean;
    costPerItemTon?: number;
    location?: string;
    rear?: boolean;
    criticals?: number;
    available?: boolean;
}

export interface IGyro {
    name: string;
    tag: string;
    weight_multiplier: number;
    criticals: number;
    costMultiplier: number;
    introduced: number;
    extinct: number;
    reintroduced: number;
    available?: boolean;
}

export interface IHeatSync {
    name: string;
    tag: string;
    dissipation: number;
    crits: {
        [key: string]: number;
    },

    cost: number;
    introduced: number;
    extinct: number;
    reintroduced: number;
}

export interface IInternalStructurePerTon {
    tonnage: number;
    head: number;
    centerTorso: number;
    rlTorso: number;
    rlArm: number;
    rlLeg: number;
}

export interface IInternalStructure {
    name: string;
    tag: string;
    crits: {
        [key: string]: number;
    },
    perTon: {[key: number]: IInternalStructurePerTon};

    cost: number;
    introduced: number;
    extinct: number;
    reintroduced: number;
}

export interface IJumpJet {
    name: string;
    tag: string;
    weight_multiplier: {
        light: number;
        medium: number;
        heavy: number;
    },
    criticals: number;
    costMultiplier: number;
    introduced: number;
    extinct: number;
    reintroduced: number;
}

export interface IMechType {
    id: number;
    tag: string;
    name: string;
}

export interface ITechOptions {
	id: number;
	tag: string;
	name: string;
}

export interface IEras {
    id: number;
    tag: string;
    name: string;
    yearStart: number;
    yearEnd: number;
}