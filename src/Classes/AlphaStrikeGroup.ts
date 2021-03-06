import {AlphaStrikeUnit, IASMULUnit} from './AlphaStrikeUnit';
import { generateUUID } from '../utils';


export interface IASGroupExport {
	name: string;
	units: IASMULUnit[];
	uuid: string;
	lastUpdated: Date;
	location?: string;
}

export default class AlphaStrikeGroup {

	members: AlphaStrikeUnit[] = [];

	uuid: string = generateUUID();
	lastUpdated: Date = new Date();

	customName : string= "";

	activeMembers: number = 0;
	groupPoints: number = 0;
	membersLabel: string = "";

    constructor(importObj: IASGroupExport | null = null ) {
        if( importObj ) {
            this.import(importObj);
		}


		this.sortUnits();
	}

	public getActiveMembers() {
		this.activeMembers = 0;
		this.groupPoints = 0;
		for( var memCount = 0; memCount < this.members.length; memCount++ ) {
			this.members[memCount].calcCurrentVals();
			if( this.members[memCount].active )
				this.activeMembers++;
			this.groupPoints += this.members[memCount].currentPoints / 1;
		}

		this.membersLabel = " (" + this.activeMembers + "/" + this.members.length + ")";
	}

    public getTotalUnits(): number {
        return this.members.length;
    }

    public getTotalPoints(): number {
        let returnValue: number = 0;

		for( let unit of this.members ) {
			returnValue += unit.currentPoints;
		}

        return returnValue;
	}

	public getName( groupNumber: number): string {
		if( this.customName ) {
			return "Group #" + groupNumber.toString() + ": " + this.customName;
		} else {
			return "Group #" + groupNumber.toString();
		}
	}

	public sortUnits() {
		this.members.sort( (a, b) => {
			if( a.currentPoints > b.currentPoints ) {
				return -1
			} else if( a.currentPoints < b.currentPoints ) {
				return 1;
			} else {
				return 0;
			}
		})
	}

    export(): IASGroupExport {
        let returnValue: IASGroupExport = {
			name: this.customName,
			units: [],
            uuid: this.uuid,
            lastUpdated: this.lastUpdated,
		}

		for( let unit of this.members ) {
			let exportUnit = unit.export();
			if( exportUnit ) {
				returnValue.units.push( exportUnit );
			}
		}

		// console.log("ASG returnValue", returnValue)
        return returnValue;
	}

	public setNew() {
		this.uuid = generateUUID();
		this.lastUpdated = new Date();
	}

    import(importObj: IASGroupExport) {
		this.customName = importObj.name;
		for( let unit of importObj.units) {
			let theUnit = new AlphaStrikeUnit( unit );
			this.members.push( theUnit );
		}
        if( importObj.uuid ) {
            this.uuid = importObj.uuid;
        }

        if( importObj.lastUpdated ) {
            this.lastUpdated = new Date(importObj.lastUpdated);
        }
    }
}
