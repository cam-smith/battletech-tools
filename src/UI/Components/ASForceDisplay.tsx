import './ASUnitEditorDisplay.scss';
import React from 'react';
import { IAppGlobals } from '../AppRouter';
import { Button } from 'react-bootstrap';
import { IASMULUnit, AlphaStrikeUnit } from '../../Classes/AlphaStrikeUnit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faBars, faEye, faHeart, faFileImport, faArrowsAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AlphaStrikeGroup from '../../Classes/AlphaStrikeGroup';
import { specialPilotAbilities, ISpecialPilotAbility } from '../../Data/special-pilot-abilities';
import AlphaStrikeForce from '../../Classes/AlphaStrikeForce';

export default class ASForceDisplay extends React.Component<IASForceDisplayProps, IASForceDisplayState> { 
    constructor(props: IASForceDisplayProps) {
        super(props);
        this.state = {
            
            contextMenuGroup: -1,
            asGroup: this.state.asGroup
        }

        this.renameGroup = this.renameGroup.bind(this);
        this.removeUnitFromGroup = this.removeUnitFromGroup.bind(this);

        this.toggleContextMenuForce = this.toggleContextMenuForce.bind(this);
        this.removeGroup = this.removeGroup.bind(this);

    }

    componentDidMount () {
        //this.props.appGlobals.makeDocumentTitle("Alpha Strike Roster");
    }

    toggleContextMenuForce( asGroupIndex: number, asUnitIndex: number ) {
        let newGroup: number = -1;
        let newUnit: number = -1;
        if( this.state.contextMenuGroup !== asGroupIndex) {
          newGroup = asGroupIndex;
          newUnit = asUnitIndex;
        }
  
        this.setState({
          contextMenuGroup: newGroup,
        })
    }

    renameGroup( newName: string, groupIndex: number ) {
        this.props.appGlobals.currentASForce.renameGroup( newName, groupIndex );
        this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
    }

    removeUnitFromGroup(asGroupIndex: number, asUnitIndex: number) {
        this.props.appGlobals.currentASForce.removeUnitFromGroup( asGroupIndex, asUnitIndex );
        this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
    }

    removeGroup( groupIndex: number ) {
        if( this.props.appGlobals.currentASForce.groups.length > groupIndex ) {
          if(this.props.appGlobals.currentASForce.groups[groupIndex].getTotalUnits() === 0 ) {
            this.props.appGlobals.currentASForce.removeGroup(groupIndex);
            this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
          } else {
            this.props.appGlobals.openConfirmDialog(
              "Confirmation",
              "This group still contains units. Are you sure you want to still remove it?",
              "Yes",
              "No",
              () => {
                this.props.appGlobals.currentASForce.removeGroup(groupIndex);
                this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
              }
            );
          }
        }
      }

    render(){
        return (
        <>
            <fieldset key={this.props.asGroupIndex?.valueOf} className="fieldset">
                    <legend>{asGroup.getName(this.props.asGroupIndex + 1)}</legend>

                    <div className="pull-right">
                      <Button
                        onClick={() => this.props.appGlobals.saveASGroupFavorite( asGroup )}
                        title="Click here to add this group to your favorites."
                        className="btn-sm"
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </Button>
                      <Button
                        onClick={() => this.removeGroup(asGroupIndex)}
                        title="Click here to remove this group."
                        className="btn-sm"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                    <label
                      className="width-80"
                    >
                      <input
                        type="text"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => this.renameGroup(event.currentTarget.value, asGroupIndex)}
                        value={asGroup.customName}
                      />
                    </label>

                    <table className="table">
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>Name</th>
                          <th>Points</th>

                        </tr>
                      </thead>
                      <tbody>
                      {asGroup.members.length > 0 ? (
                        <>
                        {asGroup.members.map( (asUnit, asUnitIndex) => {
                          return (
                            <tr key={"G"+asGroupIndex + "U"+asUnitIndex}>
                              <td className="text-left min-width no-wrap">
                                {this.props.appGlobals.currentASForce.getTotalGroups() > 1 ?
                                (
                                  <div className="drop-down-menu-container">
                                    <Button
                                      variant="primary"
                                      className="btn-sm"
                                      title="Open the context menu for this unit"
                                      onClick={() => this.toggleContextMenuForce( asGroupIndex, asUnitIndex )}
                                    >
                                      <FontAwesomeIcon icon={faBars} />
                                    </Button>
                                    <ul
                                      className={this.state.contextMenuGroup === asGroupIndex && this.state.contextMenuUnit === asUnitIndex ? "styleless dd-menu active" : "styleless dd-menu"}
                                    >
                                      <li
                                        onClick={() => this.openEditUnit(asUnit, asGroupIndex)}
                                        title="Edit this unit"
                                      ><
                                        FontAwesomeIcon icon={faEdit} /> Edit
                                      </li>
                                      {this.props.appGlobals.currentASForce.groups.map( (asGroup, asGroupListIndex) => {
                                        return (
                                          <>
                                            {asGroupListIndex !== asGroupIndex ? (
                                              <li
                                                onClick={() => this.moveUnitToGroup(asUnitIndex, asGroupIndex, asGroupListIndex)}
                                                title="Move this unit to another group"
                                              >
                                                <FontAwesomeIcon icon={faArrowsAlt} />&nbsp;
                                                Move to {asGroup.getName(asGroupListIndex + 1)}
                                              </li>
                                            ) :
                                            ( <></> )}
                                          </>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                ) : (
                                  <>
                                  <Button
                                    variant="primary"
                                    className="btn-sm"
                                    onClick={() => this.openEditUnit(asUnit, asGroupIndex)}
                                    title="Edit this unit's skill and name"
                                  >
                                    <FontAwesomeIcon icon={faEdit} />
                                  </Button>
                                  </>
                                )}


                                <Button
                                  variant="primary"
                                  className="btn-sm no-right-margin"
                                  onClick={() => this.removeUnitFromGroup(asGroupIndex, asUnitIndex)}
                                  title="Remove this unit"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </Button>
                              </td>
                              <td>
                                {asUnit.customName ? (
                                  <><strong>{asUnit.customName}</strong><br /></>
                                ) : (
                                  <></>
                                )}
                                {asUnit.name}
                                <br/>
                                { (asUnit.pilot.IsCommander)?(
                                  <FontAwesomeIcon icon={faStar} />
                                ):null }
                                { (asUnit.pilot.IsSubCommander)?(
                                  <FontAwesomeIcon icon={faStarHalfAlt} />
                                ):null }

                                Pilot:{asUnit.pilot.Name} - Skill:{asUnit.pilot.Skill}
                              </td>
                              <td>{asUnit.currentPoints}</td>

                            </tr>
                          )
                        })}
                        </>
                      ) : (
                        <tr><td colSpan={3} className="text-center">No Units</td></tr>
                      )}
                      </tbody>

                      <tfoot key="footer">
                        <tr key="groupsum">
                          <td className="text-left min-width no-wrap"></td>
                          <td>
                            <strong>Available Bonuses</strong>:({asGroup.availableFormationBonuses.length-1})
                            <select
                              value={asGroup.formationBonus? asGroup.formationBonus.Name:"" }
                              onChange={(event:React.FormEvent<HTMLSelectElement>)=>this.updateFormationBonus(event, asGroupIndex)}
                            >
                              {asGroup.availableFormationBonuses.map((bonus)=>{
                                return (
                                <option key={bonus.Name} value={bonus.Name}>{bonus.Name}</option>
                                )
                              })}
                            </select>
                            <br/>
                            {(asGroup.formationBonus && asGroup.formationBonus.Name!=="None") ? (

                              <>
                                <strong>Bonus</strong>: {asGroup.formationBonus.BonusDescription}
                              </>

                            ) : null
                            }
                          </td>
                          <td>
                            Points: {asGroup.getTotalPoints()}<br/>
                            Avg. Skill: {asGroup.getAverageSkill().toPrecision(3)}
                          </td>
                        </tr>
                      </tfoot>

                    </table>
            </fieldset>
        </>
        );
    }
}

interface IASForceDisplayProps {
    appGlobals: IAppGlobals;
    asGroupIndex: number|null;
}

interface IASForceDisplayState {
    contextMenuGroup: number;
    asGroup: AlphaStrikeGroup;
}