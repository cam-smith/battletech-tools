import { IASMULUnit } from "./Classes/AlphaStrikeUnit";
const uuidv1 = require('uuid/v1');

export function addCommas( numericalValue: number ): string {
    return (numericalValue + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
        return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
    });
}

export function generateUUID(): string {
    return uuidv1();
}

export async function getMULASSearchResults(
    searchTerm: string,
    mechRules: string,
    techFilter: string,
): Promise<IASMULUnit[]> {
    let url = "https://masterunitlist.azurewebsites.net/Unit/QuickList?MinPV=1&MaxPV=999&Name=" + searchTerm;
    let returnUnits: IASMULUnit[] = [];
    if( searchTerm.length >= 3 ) {
        await fetch(url)
        .then(async res => {
            let returnData = await res.json();

            if(!returnData) {
                return [];
            }

            returnUnits = returnData.Units;

            if( !returnUnits ) {
                return [];
            }

			for( let mechCounter = returnUnits.length - 1; mechCounter > -1; mechCounter--) {
                if( mechRules && returnUnits[mechCounter]) {
                    switch( mechRules.toLowerCase() ) {
                        case "introductory":
                            if( returnUnits[mechCounter].Rules.toLowerCase() !== "introductory" )
                                returnUnits.splice( mechCounter, 1 );
                            break;
                        case "standard":
                            if(
                                returnUnits[mechCounter].Rules.toLowerCase() !== "introductory"
                                    &&
                                returnUnits[mechCounter].Rules.toLowerCase() !== "standard"
                            )
                                returnUnits.splice( mechCounter, 1 );
                            break;
                        case "advanced":
                            if(
                                returnUnits[mechCounter].Rules.toLowerCase() !== "introductory"
                                    &&
                                returnUnits[mechCounter].Rules.toLowerCase() !== "standard"
                                    &&
                                returnUnits[mechCounter].Rules.toLowerCase() !== "advanced"
                            )
                                returnUnits.splice( mechCounter, 1 );
                            break;
                    }
                }

                if( techFilter && returnUnits[mechCounter]) {
                    switch( techFilter.toLowerCase() ) {
                        case "inner sphere":
                            if( returnUnits[mechCounter].Technology.Name.toLowerCase() !== "inner sphere" )
                                returnUnits.splice( mechCounter, 1 );
                            break;
                        case "clan":
                            if( returnUnits[mechCounter].Technology.Name.toLowerCase() !== "clan" )
                                returnUnits.splice( mechCounter, 1 );
                            break;
                    }
                }



            }

        })
        .catch(err => {
          console.log('Error: ', err)
        })

      return returnUnits;
    } else {
        return [];
    }
}
export function getMovementModifier( moveScore: number ): number {
	if( moveScore >= 25 ) {
		return 6;
	} else if ( moveScore >= 18 ) {
		return 5;
	} else if ( moveScore >= 10 ) {
		return 4;
	} else if ( moveScore >= 7 ) {
		return 3;
	} else if ( moveScore >= 5 ) {
		return 2;
	} else if ( moveScore >= 3 ) {
		return 1;
	}

	return 0;

}