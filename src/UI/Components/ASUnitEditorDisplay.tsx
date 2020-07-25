import './ASUnitEditorDisplay.scss';
import React from 'react';
import { IAppGlobals } from '../AppRouter';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { IASMULUnit, AlphaStrikeUnit } from '../../Classes/AlphaStrikeUnit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faBars, faEye, faHeart, faFileImport, faArrowsAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import AlphaStrikeUnitSVG from './SVG/AlphaStrikeUnitSVG';
import { Link } from 'react-router-dom';
import AlphaStrikeGroup from '../../Classes/AlphaStrikeGroup';
import UIPage from './UIPage';
import { formationBonuses } from '../../Data/formation-bonuses';
import { specialPilotAbilities, ISpecialPilotAbility } from '../../Data/special-pilot-abilities';
import AlphaStrikeForce from '../../Classes/AlphaStrikeForce';

export default class ASUnitEditorDisplay extends React.Component<IASUnitEditorDisplayProps, IASUnitEditorDisplayState> { 
    constructor(props: IASUnitEditorDisplayProps) {
        super(props);
        this.state = {
            showASUnit: null,
            groupIndex: null,
            editASUnit: false,
        }


        this.updateUnitSkill = this.updateUnitSkill.bind(this);
        this.renameUnit = this.renameUnit.bind(this);
        this.renamePilot = this.renamePilot.bind(this);

        this.setCommander = this.setCommander.bind(this);
        this.setSubCommander = this.setSubCommander.bind(this);

        this.closeShowUnitDialog = this.closeShowUnitDialog.bind(this);
    }

    componentDidMount () {
        //this.props.appGlobals.makeDocumentTitle("Alpha Strike Roster");
    }

    closeShowUnitDialog() {
        this.setState({
          showASUnit: null,
          groupIndex: null
        })
    }
  
    updateUnitSkill(event: React.FormEvent<HTMLSelectElement>) {
        if(this.state.showASUnit) {
          this.state.showASUnit.setSkill( +event.currentTarget.value );
          this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
        }
    }
  
    renameUnit(event: React.FormEvent<HTMLInputElement>) {
        if(this.state.showASUnit) {
            let asUnit = this.state.showASUnit;
            asUnit.customName = event.currentTarget.value;
            this.setState({
            showASUnit: asUnit,
            })
            this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
        }
    }
    renamePilot(event: React.FormEvent<HTMLInputElement>){
        if(this.state.showASUnit){
            let asUnit= this.state.showASUnit;
            asUnit.pilot.Name = event.currentTarget.value;
            this.setState({
            showASUnit: asUnit,
            })
            this.props.appGlobals.saveCurrentASForce(this.props.appGlobals.currentASForce);
        }
    }
  
    getAvailableSlots(skill:number):boolean[]{

        let pool=5;
        console.log(pool-skill);
        let result:boolean[]=[];
        for (let i=0;i<(pool-skill);i++){
            console.log("pushed")
            result.push(false);
        }
        return result;
    }
    getIsValidSPA(spa:ISpecialPilotAbility, unit:AlphaStrikeUnit):boolean{
        let returnval:boolean=false;
        let pointsAvailable:number=0;
        switch(unit.pilot.Skill){
            case 4: 
            pointsAvailable=2;
            break;
            
            case 3: 
            pointsAvailable=4;
            break;
            
            case 2: 
            pointsAvailable=4;
            break;
            
            case 1:
            pointsAvailable=6;
            break;
            case 0:
            pointsAvailable=6;
            break;
            default:
            break;

        }
    
    
        let costval:boolean=spa.Cost<=pointsAvailable;
        let typeval:boolean=spa.Types.some(x=>(x===unit.type || x==="Any"));
        //console.log(spa.Name + " applicable to:"+ spa.Types + " unit:" + unit.type + "equals" + typeval + " points"+costval + " returned"+ (costval&&typeval));
        returnval=  costval && typeval;
        return returnval;
    }
  
  
      setCommander(force:AlphaStrikeForce, newVal:boolean):boolean {
        if(this.state.showASUnit){
          
          force.groups.map(x=>{
            x.members.map(x=>{
              x.pilot.IsCommander=false;
              x.pilot.CommanderUuid="";
              return true;
              });
              return true;
          });
          let asUnit= this.state.showASUnit;
  
          asUnit.pilot.IsCommander = newVal;
          asUnit.pilot.CommanderUuid = newVal?force.uuid:"";
          
          this.setState({
            showASUnit: asUnit,
          })
          
          this.props.appGlobals.saveCurrentASForce(force);
        }
        return true;
      }
  
      setSubCommander(force:AlphaStrikeGroup, newVal:boolean):boolean {
        
        if(this.state.showASUnit){
          var foundGroupIndex = this.props.appGlobals.currentASForce.groups.indexOf(force);
          let asUnit= this.state.showASUnit;
          force.members.map(x=>{
                                x.pilot.IsSubCommander=false;
                                x.pilot.SubCommanderUuid="";
                                return true;
                                });
  
          asUnit.pilot.IsSubCommander = newVal;
          asUnit.pilot.SubCommanderUuid = newVal?force.uuid:"";
          this.setState({
            showASUnit: asUnit,
            
          })
          this.props.appGlobals.currentASForce.groups[foundGroupIndex] = force;
          this.props.appGlobals.saveCurrentASForce(this.props.appGlobals.currentASForce);
        }
        return true;
      }


    render() {
        return <>
        <Modal
                onHide={this.closeShowUnitDialog}
                show={this.state.showASUnit !== null}
                className="modal-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                    {this.state.editASUnit ? (
                        <>
                        Editing Unit: {this.state.showASUnit ? (this.state.showASUnit.name ) : ( "" ) }
                        </>
                    ) : (
                        <>Viewing Unit: {this.state.showASUnit ? (this.state.showASUnit.name ) : ( "" ) }</>
                    )}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {this.state.editASUnit && this.state.showASUnit ? (
                        <div className="row">
                        <div className="col-xs-6 col-lg-8 text-left" >
                            <label>
                            Custom Unit Name:<br />
                            <input
                                type="text"
                                value={this.state.showASUnit.customName}
                                placeholder="Enter your custom mech's name here"
                                onChange={this.renameUnit}
                            />
                            </label>
                        </div>
                        <div className="col-xs-6 col-lg-4 text-left">
                            <label>
                            Skill Level:<br />
                            <select
                                value={this.state.showASUnit.currentSkill}
                                onChange={this.updateUnitSkill}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                            </label>

                            <label>
                            Pilot Name:<br/>
                            <input 
                                type="text" 
                                value={this.state.showASUnit.pilot.Name}
                                placeholder="Pilot Name"
                                onChange={this.renamePilot}
                            />
                            </label>


                            <label>
                            Skill Level:<br />
                            <select
                                value={this.state.showASUnit.pilot.Skill}
                                onChange={this.updateUnitSkill}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                            </label>

                            <label>Special Pilot Abilities:
                            <select id="spas" multiple>
                                {specialPilotAbilities.map((spa:ISpecialPilotAbility)=>{
                                return (<option key={spa.Name} value={spa.Name} disabled={!this.getIsValidSPA(spa,this.state.showASUnit!)} >{spa.Name}-{spa.Cost}-{spa.Summary}</option>)
                                })}
                            </select>
                            </label>
                            
                            
                            <label>
                            <input 
                                type="checkbox" 
                                id="Commander" 
                                //checked={this.state.showASUnit.pilot.IsCommander} 
                                defaultChecked={this.state.showASUnit.pilot.IsCommander}
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
                                    this.setCommander(
                                                    this.props.appGlobals.currentASForce,
                                                    ev.target.checked
                                                    )
                                            }}
                            /> Commander
                            </label>
                            <label>
                            <input 
                                type="checkbox" 
                                id="SubCommander" 
                                //checked={this.state.showASUnit.pilot.IsSubCommander}
                                defaultChecked={this.state.showASUnit.pilot.IsSubCommander}
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
                                let cleanIndex: number = this.state.groupIndex===null?0:this.state.groupIndex;
                                this.setSubCommander(
                                                    this.props.appGlobals.currentASForce.groups[cleanIndex],
                                                    ev.target.checked
                                                    )
                                            }}
                            /> SubCommander
                            </label>

                            
                        </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <AlphaStrikeUnitSVG
                    height="auto"
                    width="100%"
                    appGlobals={this.props.appGlobals}
                    asUnit={this.state.showASUnit}
                    // inPlay={true}
                    />
                </Modal.Body>
                {
                    <Modal.Footer>

                    <Button variant="secondary" onClick={this.closeShowUnitDialog}>
                        Close
                    </Button>

                </Modal.Footer>
                }
        </Modal>  
        </>
    };
}

interface IASUnitEditorDisplayProps {
    appGlobals: IAppGlobals;
}

interface IASUnitEditorDisplayState {
    showASUnit: AlphaStrikeUnit | null;
    groupIndex: number|null;
    editASUnit: boolean;
}