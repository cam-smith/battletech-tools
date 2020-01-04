export interface ISpecialPilotAbility {
    Name: string;
    Cost: number;
    Description: string;
}

export const specialPilotAbiltiies: ISpecialPilotAbility[] = [
    {
        Name: "Animal Mimicry",
        Cost: 2,
        Description: "Quadruped unit gains mobility bonus and ability to demoralize opponents"
    },
    {
        Name: "Antagonizer",
        Cost: 3,
        Description: "Unit can enrage an opponent for a brief period"
    },
    {
        Name: "Blood Stalker",
        Cost: 2,
        Description: "Unit may focus its attacks better on a prefered target until it is destroyed"
    },
    {
        Name: "Cluster Hitter",
        Cost: 2,
        Description: "Unit can deliver extra damage in an attack using missiles or flak weapons"
    },
    {
        Name: "Combat Intuition",
        Cost: 3,
        Description: "Unit may move and resolve fire before any other unit acts"
    },
    {
        Name: "Cross-Country",
        Cost: 2,
        Description: "Ground vehicle unit may enter some illegal terrain types, but at high Move cost"
    },
    {
        Name: "Demoralizer",
        Cost: 3,
        Description: "Unit can intimidate an opponent for a brief period"
    },
    
    {
        Name: "Dodge",
        Cost: 2,
        Description: "Unit can attempt to evade physical attacks"
    },
    {
        Name: "Dust-Off",
        Cost: 2,
        Description: "Enables airborne unit types to land or liftoff in non-clear terrain"
    },
    {
        Name: "Eagle's Eyes",
        Cost: 2,
        Description: "Unit gains (or augments) its ability to spot hidden units and avoid minesUnit gains (or augments) its ability to spot hidden units and avoid mines"
    },
    {
        Name: "Environmental Specialist",
        Cost: 2,
        Description: "Reduces movement and combat modifiers in a preferred environment"
    },
    {
        Name: "Fist Fire",
        Cost: 2,
        Description: "Unit delivers extra damage in physical attacks"
    },
    {
        Name: "Float Like a Butterfly(1)",
        Cost: 1,
        Description: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(2)",
        Cost: 2,
        Description: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(3)",
        Cost: 3,
        Description: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Float Like a Butterfly(4)",
        Cost: 4,
        Description: "Unit may force an opponent to reroll an attack with this unit as the target"
    },
    {
        Name: "Foreward Observer",
        Cost: 1,
        Description: "Unit improves accuracy of indirect fire when used as a spotter"
    },
    {
        Name: "Golden Goose",
        Cost: 3,
        Description: "Improves accuracy for air-to-ground strafing, strike, and bombing attacks"
    },
    {
        Name: "Ground-Hugger",
        Cost: 2,
        Description: "Airbone unit may execute a double-strafe or double-strike air-to-ground attack"
    },
    {
        Name: "Headhunter",
        Cost: 2,
        Description: "Can automatically identify enemy command units"
    },
    {
        Name: "Heavy Lifter",
        Cost: 1,
        Description: "Enables increased carrying capacity with External Cargo rules"
    },
    {
        Name: "Hopper",
        Cost: 1,
        Description: "Unit may avoid being reduced below 1 inch of Move by MP Hits"
    },
    {
        Name: "Hot Dog",
        Cost: 2,
        Description: "Increases the Heat a unit can sustain before shutdown"
    },
    {
        Name: "Human TRO",
        Cost: 1,
        Description: "Unit can ignore the Concealing Unit Data rules vs. non-hidden opponents"
    },
    {
        Name: "Iron Will",
        Cost: 1,
        Description: "Unit can resist psychological attacks and receives a bonus during Morale checks"
    },
    {
        Name: "Jumping Jack",
        Cost: 2,
        Description: "Improves accuracy of any attack made when the unit uses jumping Move"
    },
    {
        Name: "Lucky(1)",
        Cost: 1,
        Description: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(2)",
        Cost: 2,
        Description: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(3)",
        Cost: 3,
        Description: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Lucky(4)",
        Cost: 4,
        Description: "Unit may reroll a limited number of failed attacks and Control Rolls per scenario"
    },
    {
        Name: "Maneuvering Ace",
        Cost: 2,
        Description: "Reduces Move costs for woods/jungle terrain and aerospace atmospheric control"
    },
    {
        Name: "Marksman",
        Cost: 2,
        Description: "If unit attacks while stationary, may score extra critical after deliverying 1 damage"
    },
    {
        Name: "Melee Master",
        Cost: 2,
        Description: "Unit increases its physical attack damage by half its Size (round up)"
    },
    {
        Name: "Melee Specialist",
        Cost: 1,
        Description: "Unit delivers physical attacks with greater accuracy"
    },
    {
        Name: "Multi-Tasker",
        Cost: 2,
        Description: "Unit can divide its weapon attack between two targets per turn"
    },
    {
        Name: "Natural Grace",
        Cost: 3,
        Description: "Unit gains 360-degree feild of fire; reduces Move costs in ultra-heavy terrain"
    },
    {
        Name: "Oblique Artilleryman",
        Cost: 1,
        Description: "Improves accuracy and reduces scatter for all artillery weapon attacks"
    },
    {
        Name: "Oblique Attacker",
        Cost: 1,
        Description: "Improves accuracy for indirect fire, and enables indirect attacks without a spotter"
    },
    {
        Name: "Range Master",
        Cost: 2,
        Description: "Unit swaps normal range modifier for Medium, Long, or Extreme range with Short"
    },
    {
        Name: "Ride the Wash",
        Cost: 4,
        Description: "Unit reduces atmospheric combat modifiers; may execute special air-to-air attack"
    },
    {
        Name: "Sandblaster",
        Cost: 2,
        Description: "Unit improves accuracy and damage when only using AC and missile weapons"
    },
    {
        Name: "Shaky Stick",
        Cost: 2,
        Description: "Airbourne unit is harder to hit from the ground during air-to-ground attacks"
    },
    {
        Name: "Sharpshooter",
        Cost: 4,
        Description: "If unit attacks while stationary, may score an extra critical after delivering full damage"
    },
    {
        Name: "Slugger",
        Cost: 1,
        Description: "'Mech unit can improvise its own melee weapons from suitable terrain"
    },
    {
        Name: "Sniper",
        Cost: 3,
        Description: "Unit reduces Medium, Long, and Extreme range modifiers by half"
    },
    {
        Name: "Speed Demon",
        Cost: 2,
        Description: "Unit can move faster than normal"
    },
    {
        Name: "Stand-Aside",
        Cost: 1,
        Description: "Unit can pass directly through enemy units at extra Move cost"
    },
    {
        Name: "Street Fighter",
        Cost: 2,
        Description: "Unit may pre-empt an attack against it by enemies in base contact"
    },
    {
        Name: "Sure-Footed",
        Cost: 2,
        Description: "Unit receives bonus movement on paved or ice terrain and ignores skidding"
    },
    {
        Name: "Swordsman",
        Cost: 2,
        Description: "Unit can deliver imporved damage or critical hits when using MEL special"
    },
    {
        Name: "Tactical Genius",
        Cost: 3,
        Description: "Enables command unit to reroll initiatives once every 2 turns"
    },
    {
        Name: "Terrain Master (Drag Racer)",
        Cost: 3,
        Description: "Ground vehicles unit gains extra speed on ice of pavement; avoids skidding better"
    },
    {
        Name: "Terrain Master (Forest Ranger)",
        Cost: 3,
        Description: "Unit moves more easily through (and gains extra cover from) woods and jungle"
    },{
        Name: "Terrain Master (Frogman)",
        Cost: 3,
        Description: "Unit moves more easily than others while fully submerged"
    },
    {
        Name: "Terrain Master (Mountaineer)",
        Cost: 3,
        Description: "Unit moves more easily through level changes and rough terrain types"
    },
    {
        Name: "Terrain Master (Nightwalker)",
        Cost: 3,
        Description: "Unit ignores combat modifiers for darkness"
    },
    {
        Name: "Terrain Master (Sea Monster)",
        Cost: 3,
        Description: "Unit moves more easily and ignores attack penalties in water terrain"
    },
    {
        Name: "Terrain Master (Swamp Beast)",
        Cost: 3,
        Description: "Unit moves more easily through mud and swamp terrain; Ignores bog down in same"
    },
    {
        Name: "Weapons Specialist",
        Cost: 3,
        Description: "Unit can deliver a more accurate attack as long as it uses only half its firepower"
    },
    {
        Name: "Wind Walker",
        Cost: 2,
        Description: "Unit ignores atmospheric combat modifiers and gains a bonus to landing and liftoff"
    },
    {
        Name: "Zweihander",
        Cost: 2,
        Description: "'Mech unit delivers more damage in physical attacks"
    },
    {
        Name: "Light Horseman",
        Cost: 2,
        Description: "Beast-mounted infantry unit moves faster, even though difficult terrain"
    },
    {
        Name: "Heavy Horse",
        Cost: 2,
        Description: "Beast-mounted infantry unit can inflict extra damage at point-blank range"
    },
    {
        Name: "Foot Cavalry",
        Cost: 1,
        Description: "Foot-based infantry unit moves faster even through difficult terrain"
    },
    {
        Name: "Urban Guerrilla",
        Cost: 1,
        Description: "Infantry unit is harder to attack in urban terrain, and may \"spawn\" support"
    }
];