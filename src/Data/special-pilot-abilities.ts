
export interface ISpecialPilotAbility {
    Name: string;
    Types: string[];
    Cost: number;
    Summary: string;
    Description?: string;
}

export const specialPilotAbilities: ISpecialPilotAbility[] = [
    {
        Name: "Animal Mimicry",
        Types: ["BM", "PM"],
        Cost: 2,
        Summary: "Quadruped unit gains mobility bonus and ability to demoralize opponents"
    },
    {
        Name: "Antagonizer",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit can enrage an opponent for a brief period"
    },
    {
        Name: "Blood Stalker",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit may focus its attacks better on a prefered target until it is destroyed"
    },
    {
        Name: "Cluster Hitter",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit can deliver extra damage in an attack using missiles or flak weapons"
    },
    {
        Name: "Combat Intuition",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit may move and resolve fire before any other unit acts"
    },
    {
        Name: "Cross-Country",
        Types: ["CV"],
        Cost: 2,
        Summary: "Ground vehicle unit may enter some illegal terrain types, but at high Move cost"
    },
    {
        Name: "Demoralizer",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit can intimidate an opponent for a brief period"
    },
    
    {
        Name: "Dodge",
        Types: ["BM","PM"],
        Cost: 2,
        Summary: "Unit can attempt to evade physical attacks"
    },
    {
        Name: "Dust-Off",
        Types: ["CF","AF","CV","DS","SC"],
        Cost: 2,
        Summary: "Enables airborne unit types to land or liftoff in non-clear terrain"
    },
    {
        Name: "Eagle's Eyes",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit gains (or augments) its ability to spot hidden units and avoid minesUnit gains (or augments) its ability to spot hidden units and avoid mines"
    },
    {
        Name: "Environmental Specialist",
        Types: ["Any"],
        Cost: 2,
        Summary: "Reduces movement and combat modifiers in a preferred environment"
    },
    {
        Name: "Fist Fire",
        Types: ["BM","PM"],
        Cost: 2,
        Summary: "Unit delivers extra damage in physical attacks"
    },
    {
        Name: "Float Like a Butterfly(1)",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(2)",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(3)",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(4)",
        Types: ["Any"],
        Cost: 4,
        Summary: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Foreward Observer",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit improves accuracy of indirect fire when used as a spotter"
    },
    {
        Name: "Golden Goose",
        Types: ["CV", "AS", "CF","SC"],
        Cost: 3,
        Summary: "Improves accuracy for air-to-ground strafing, strike, and bombing attacks"
    },
    {
        Name: "Ground-Hugger",
        Types: ["CV", "AS", "CF", "SC"],
        Cost: 2,
        Summary: "Airbone unit may execute a double-strafe or double-strike air-to-ground attack"
    },
    {
        Name: "Headhunter",
        Types: ["Any"],
        Cost: 2,
        Summary: "Can automatically identify enemy command units"
    },
    {
        Name: "Heavy Lifter",
        Types: ["BM"],
        Cost: 1,
        Summary: "Enables increased carrying capacity with External Cargo rules"
    },
    {
        Name: "Hopper",
        Types: ["BM","IM"],
        Cost: 1,
        Summary: "Unit may avoid being reduced below 1 inch of Move by MP Hits"
    },
    {
        Name: "Hot Dog",
        Types: ["BM","IM","AF"],
        Cost: 2,
        Summary: "Increases the Heat a unit can sustain before shutdown"
    },
    {
        Name: "Human TRO",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit can ignore the Concealing Unit Data rules vs. non-hidden opponents"
    },
    {
        Name: "Iron Will",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit can resist psychological attacks and receives a bonus during Morale checks"
    },
    {
        Name: "Jumping Jack",
        Types: ["BM","IM","PM"],
        Cost: 2,
        Summary: "Improves accuracy of any attack made when the unit uses jumping Move"
    },
    {
        Name: "Lucky(1)",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(2)",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(3)",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(4)",
        Types: ["Any"],
        Cost: 4,
        Summary: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Maneuvering Ace",
        Types: ["Any"],
        Cost: 2,
        Summary: "Reduces Move costs for woods/jungle terrain and aerospace atmospheric control"
    },
    {
        Name: "Marksman",
        Types: ["Any"],
        Cost: 2,
        Summary: "If unit attacks while stationary, may score extra critical after deliverying 1 damage"
    },
    {
        Name: "Melee Master",
        Types: ["BM","IM","PM"],
        Cost: 2,
        Summary: "Unit increases its physical attack damage by half its Size (round up)"
    },
    {
        Name: "Melee Specialist",
        Types: ["BM","IM","PM"],
        Cost: 1,
        Summary: "Unit delivers physical attacks with greater accuracy"
    },
    {
        Name: "Multi-Tasker",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit can divide its weapon attack between two targets per turn"
    },
    {
        Name: "Natural Grace",
        Types: ["BM","IM","PM"],
        Cost: 3,
        Summary: "Unit gains 360-degree feild of fire; reduces Move costs in ultra-heavy terrain"
    },
    {
        Name: "Oblique Artilleryman",
        Types: ["Any"],
        Cost: 1,
        Summary: "Improves accuracy and reduces scatter for all artillery weapon attacks"
    },
    {
        Name: "Oblique Attacker",
        Types: ["Any"],
        Cost: 1,
        Summary: "Improves accuracy for indirect fire, and enables indirect attacks without a spotter"
    },
    {
        Name: "Range Master",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit swaps normal range modifier for Medium, Long, or Extreme range with Short"
    },
    {
        Name: "Ride the Wash",
        Types: ["Any"],//any airborne????
        Cost: 4,
        Summary: "Unit reduces atmospheric combat modifiers; may execute special air-to-air attack"
    },
    {
        Name: "Sandblaster",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit improves accuracy and damage when only using AC and missile weapons"
    },
    {
        Name: "Shaky Stick",
        Types: ["Any"],//any airborne
        Cost: 2,
        Summary: "Airbourne unit is harder to hit from the ground during air-to-ground attacks"
    },
    {
        Name: "Sharpshooter",
        Types: ["Any"],
        Cost: 4,
        Summary: "If unit attacks while stationary, may score an extra critical after delivering full damage"
    },
    {
        Name: "Slugger",
        Types: ["BM", "IM"],
        Cost: 1,
        Summary: "'Mech unit can improvise its own melee weapons from suitable terrain"
    },
    {
        Name: "Sniper",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit reduces Medium, Long, and Extreme range modifiers by half"
    },
    {
        Name: "Speed Demon",
        Types: ["Any"],
        Cost: 2,
        Summary: "Unit can move faster than normal"
    },
    {
        Name: "Stand-Aside",
        Types: ["Any"],
        Cost: 1,
        Summary: "Unit can pass directly through enemy units at extra Move cost"
    },
    {
        Name: "Street Fighter",
        Types: ["BM","IM","PM"],
        Cost: 2,
        Summary: "Unit may pre-empt an attack against it by enemies in base contact"
    },
    {
        Name: "Sure-Footed",
        Types: ["BM","IM","PM"],
        Cost: 2,
        Summary: "Unit receives bonus movement on paved or ice terrain and ignores skidding"
    },
    {
        Name: "Swordsman",
        Types: ["BM","IM","PM"],
        Cost: 2,
        Summary: "Unit can deliver imporved damage or critical hits when using MEL special"
    },
    {
        Name: "Tactical Genius",
        Types: ["Any"],
        Cost: 3,
        Summary: "Enables command unit to reroll initiatives once every 2 turns"
    },
    {
        Name: "Terrain Master (Drag Racer)",
        Types: ["CV"],
        Cost: 3,
        Summary: "Ground vehicles unit gains extra speed on ice of pavement; avoids skidding better"
    },
    {
        Name: "Terrain Master (Forest Ranger)",
        Types: ["Any"],//non airborne
        Cost: 3,
        Summary: "Unit moves more easily through (and gains extra cover from) woods and jungle"
    },{
        Name: "Terrain Master (Frogman)",
        Types: ["BM","IM","PM"],
        Cost: 3,
        Summary: "Unit moves more easily than others while fully submerged"
    },
    {
        Name: "Terrain Master (Mountaineer)",
        Types: ["Any"],//non airborne
        Cost: 3,
        Summary: "Unit moves more easily through level changes and rough terrain types"
    },
    {
        Name: "Terrain Master (Nightwalker)",
        Types: ["Any"],//non airborne
        Cost: 3,
        Summary: "Unit ignores combat modifiers for darkness"
    },
    {
        Name: "Terrain Master (Sea Monster)",
        Types: ["Any"],//non airborne
        Cost: 3,
        Summary: "Unit moves more easily and ignores attack penalties in water terrain"
    },
    {
        Name: "Terrain Master (Swamp Beast)",
        Types: ["Any"],//non airborne
        Cost: 3,
        Summary: "Unit moves more easily through mud and swamp terrain; Ignores bog down in same"
    },
    {
        Name: "Weapons Specialist",
        Types: ["Any"],
        Cost: 3,
        Summary: "Unit can deliver a more accurate attack as long as it uses only half its firepower"
    },
    {
        Name: "Wind Walker",
        Types: ["Any"],//any airborne
        Cost: 2,
        Summary: "Unit ignores atmospheric combat modifiers and gains a bonus to landing and liftoff"
    },
    {
        Name: "Zweihander",
        Types: ["BM","IM"],
        Cost: 2,
        Summary: "'Mech unit delivers more damage in physical attacks"
    },
    {
        Name: "Light Horseman",
        Types: ["CI"],//beastmounted
        Cost: 2,
        Summary: "Beast-mounted infantry unit moves faster, even though difficult terrain"
    },
    {
        Name: "Heavy Horse",
        Types: ["CI"],//beastmounted
        Cost: 2,
        Summary: "Beast-mounted infantry unit can inflict extra damage at point-blank range"
    },
    {
        Name: "Foot Cavalry",
        Types: ["CI"],//foot only
        Cost: 1,
        Summary: "Foot-based infantry unit moves faster even through difficult terrain"
    },
    {
        Name: "Urban Guerrilla",
        Types: ["CI","BA"],
        Cost: 1,
        Summary: "Infantry unit is harder to attack in urban terrain, and may \"spawn\" support"
    }
];