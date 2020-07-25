import React from 'react';
import './Home.scss';
import {IAppGlobals} from '../../AppRouter';
import { getMULASSearchResults } from '../../../utils';
import { IASMULUnit, AlphaStrikeUnit } from '../../../Classes/AlphaStrikeUnit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faBars, faEye, faHeart, faFileImport, faArrowsAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import AlphaStrikeUnitSVG from '../../Components/SVG/AlphaStrikeUnitSVG';
import { Link } from 'react-router-dom';
import AlphaStrikeGroup from '../../../Classes/AlphaStrikeGroup';
import UIPage from '../../Components/UIPage';
import { formationBonuses } from '../../../Data/formation-bonuses';
import { threadId } from 'worker_threads';

export default class AlphaStrikeRosterHome extends React.Component<IHomeProps, IHomeState> {
    searchTech: string = "";
    searchTerm: string = "";
    searchRules: string = "";
    constructor(props: IHomeProps) {
        super(props);

        let lsSearchTerm = "";
        let rawLSSearchTerm = localStorage.getItem("asSearchTerm");
        if( rawLSSearchTerm ) {
          lsSearchTerm = rawLSSearchTerm;
        }

        let lsSearchRules = "";
        let rawLSsearchRules = localStorage.getItem("asSearchRules");
        if( rawLSsearchRules ) {
          lsSearchRules = rawLSsearchRules;
        }

        let lsSearchTech = "";
        let rawLSSearchTech = localStorage.getItem("asSearchTech");
        if( rawLSSearchTech ) {
          lsSearchTech = rawLSSearchTech;
        }

        let lsSearchResults: IASMULUnit[] = [];
        let rawLSSearchResults = localStorage.getItem("asSearchResults");
        if( rawLSSearchResults ) {
          lsSearchResults = JSON.parse(rawLSSearchResults);
        }

        this.searchTech = lsSearchTech;
        this.searchTerm = lsSearchTerm;
        this.searchRules = lsSearchRules;

        this.state = {
            updated: false,
            foundItems: [],
            searchResults: lsSearchResults,
            showASUnit: null,
            groupIndex: null,
            searchText: lsSearchTerm,
            editASUnit: false,

            contextMenuGroup: -1,
            contextMenuUnit: -1,

            contextMenuSearch: -1,
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.updateRules = this.updateRules.bind(this);
        this.updateTech = this.updateTech.bind(this);
        this.updateSearchResults = this.updateSearchResults.bind(this);

        this.openViewUnit = this.openViewUnit.bind(this);
        this.openEditUnit = this.openEditUnit.bind(this);



        this.addToGroup = this.addToGroup.bind(this);
        
        this.newGroup = this.newGroup.bind(this);
        this.updateFormationBonus = this.updateFormationBonus.bind(this);

        
        this.toggleContextMenuSearch = this.toggleContextMenuSearch.bind(this);
        this.moveUnitToGroup = this.moveUnitToGroup.bind(this);

        
        this.removeFavoriteConfirm = this.removeFavoriteConfirm.bind(this);



        this.updateSearchResults();
    }

    removeFavoriteConfirm( asFavGroupIndex: number ) {

      this.props.appGlobals.openConfirmDialog(
        "Confirmation",
        "Are you sure you want to delete this favorite group?",
        "Yes",
        "No",
        () => {
          this.props.appGlobals.removeASGroupFavorite(asFavGroupIndex);
        }
      );
    }

    loadASFavorite(asFavGroup: AlphaStrikeGroup ) {
      asFavGroup.setNew();
      this.props.appGlobals.currentASForce.groups.push( asFavGroup );
      this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
    }



    moveUnitToGroup(
      fromUnitIndex: number,
      fromGroupIndex: number,
      toGroupIndex: number) {
        this.props.appGlobals.currentASForce.moveUnitToGroup( fromUnitIndex, fromGroupIndex, toGroupIndex );
        this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
        this.setState({
          contextMenuSearch: -1,
          contextMenuUnit: -1,
          contextMenuGroup: -1,
        })
    }

    toggleContextMenuSearch( searchIndex: number ) {
      let newIndex: number = -1;
      if( this.state.contextMenuSearch !== searchIndex) {
        newIndex = searchIndex;
      }

      this.setState({
        contextMenuSearch: newIndex,
        contextMenuUnit: -1,
        contextMenuGroup: -1,
      })
    }

    toggleContextMenuForce( asGroupIndex: number, asUnitIndex: number ) {
      let newGroup: number = -1;
      let newUnit: number = -1;
      if( this.state.contextMenuGroup !== asGroupIndex && this.state.contextMenuUnit !== asUnitIndex ) {
        newGroup = asGroupIndex;
        newUnit = asUnitIndex;
      }

      this.setState({
        contextMenuGroup: newGroup,
        contextMenuUnit: newUnit,
        contextMenuSearch: -1,
      })
    }

    updateSearch( event: React.FormEvent<HTMLInputElement> ) {
        localStorage.setItem( "asSearchTerm", event.currentTarget.value);
        this.searchTerm = event.currentTarget.value;
        this.setState({
          searchText:  event.currentTarget.value
        })
        this.updateSearchResults();
    }

    updateRules( event: React.FormEvent<HTMLSelectElement> ) {
      localStorage.setItem( "asSearchRules", event.currentTarget.value);

      this.searchRules = event.currentTarget.value;

      this.updateSearchResults();
    }

    updateFormationBonus(event:React.FormEvent<HTMLSelectElement>, groupIndex:number){
      this.props.appGlobals.currentASForce.groups[groupIndex].formationBonus=formationBonuses.find(x=>x.Name===event.currentTarget.value);
      this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
    }

    updateTech( event: React.FormEvent<HTMLSelectElement> ) {
      localStorage.setItem( "asSearchTech", event.currentTarget.value);
      this.searchTech = event.currentTarget.value;
      this.updateSearchResults();
    }

    async updateSearchResults() {
      let data: IASMULUnit[] = await getMULASSearchResults(
        this.searchTerm,
        this.searchRules,
        this.searchTech,
      );

      this.setState({
        searchResults: data,
        contextMenuSearch: -1,
        contextMenuUnit: -1,
        contextMenuGroup: -1,
      })

      localStorage.setItem( "asSearchResults", JSON.stringify(data));
      // console.log("data", data)
    }

    componentDidMount () {
      this.props.appGlobals.makeDocumentTitle("Alpha Strike Roster");
    }

    openViewUnit( theUnit: IASMULUnit ) {
      let showASUnit = new AlphaStrikeUnit( theUnit );

      this.setState({
        showASUnit: showASUnit,
        editASUnit: false,
      })
    }

    openEditUnit( showASUnit: AlphaStrikeUnit, groupIndex: number ) {

      this.setState({
        showASUnit: showASUnit,
        editASUnit: true,
        groupIndex: groupIndex,
        contextMenuGroup: -1,
        contextMenuUnit: -1,
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


    addToGroup( mulUnit: IASMULUnit,  groupIndex: number = 0  ) {
      this.props.appGlobals.currentASForce.addToGroup( mulUnit, groupIndex );
      this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
      this.setState({
        contextMenuSearch: -1,
      })
    }

    newGroup() {
      this.props.appGlobals.currentASForce.newGroup();
      this.props.appGlobals.saveCurrentASForce( this.props.appGlobals.currentASForce );
    }

    

    render() {
      return (
        <>
        <></>
        <UIPage current="alpha-strike-roster" appGlobals={this.props.appGlobals}>

          {this.props.appGlobals.currentASForce.getTotalUnits() > 0 ? (
            <div className="row">
              <div className="col-12">
                <Link
                  to={`${process.env.PUBLIC_URL}/alpha-strike-roster/play`}
                  className="btn btn-primary no-margin full-width"
                  title="Click here to go into 'Play Mode'"
                >
                    Play Mode
                </Link><br />
                <br />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="row">
            <div className="col-lg-5">
              <div className="text-section">
                <h2>Current Force</h2>
                <div className="section-content">
                {this.props.appGlobals.currentASForce.groups.map( (asGroup, asGroupIndex) => {
                  return (
                  <></>
                  )
                })}
                <p>
                  <Button
                    variant="primary"
                    onClick={this.newGroup}
                    className="display-block text-center full-width no-margin"
                  >
                    New Group
                  </Button>
                </p>
                <p className="text-right">
                  <strong>Total Groups</strong>: {this.props.appGlobals.currentASForce.getTotalGroups()}<br />
                  <strong>Total Units</strong>: {this.props.appGlobals.currentASForce.getTotalUnits()}<br />
                  <strong>Total Points</strong>: {this.props.appGlobals.currentASForce.getTotalPoints()}<br />

                </p>

                </div>
              </div>

              {this.props.appGlobals.favoriteASGroups.length > 0 ? (
                <>
                <div className="text-section">
                <h2>Favorite Groups</h2>
                <div className="section-content">
                {this.props.appGlobals.favoriteASGroups.map( (asFavGroup, asFavGroupIndex) => {
                  return (<fieldset key={asFavGroupIndex} className="fieldset">
                    <legend>{asFavGroup.getName(asFavGroupIndex + 1)}</legend>

                    <div className="pull-right">
                      <Button
                        onClick={() => this.loadASFavorite(asFavGroup)}
                        title="Load this favorite group to your current force"
                        className="btn-sm"
                      >
                        <FontAwesomeIcon icon={faFileImport} />
                      </Button>

                      <Button
                        onClick={() => this.removeFavoriteConfirm( asFavGroupIndex)}
                        title="Remove this favorite"
                        className="btn-sm"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                    <div className="text-center">
                      <strong># Units/Points</strong>: {asFavGroup.getTotalUnits()}/{asFavGroup.getTotalPoints()}
                    </div>

                    <table className="table tighter-padding">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                      {asFavGroup.members.length > 0 ? (
                        <>
                        {asFavGroup.members.map( (asFavGroupUnit, asFavGroupUnitIndex) => {
                          return (
                            <tr key={asFavGroupUnitIndex}>
                              <td>
                                {asFavGroupUnit.customName ? (
                                  <><strong>{asFavGroupUnit.customName}</strong><br /></>
                                ) : (
                                  <></>
                                )}
                                {asFavGroupUnit.name}
                              </td>
                              <td>{asFavGroupUnit.currentPoints}</td>

                            </tr>
                          )
                        })}
                        </>
                      ) : (
                        <tr><td colSpan={3} className="text-center">No Units</td></tr>
                      )}
                      </tbody>
                    </table>
                  </fieldset>
                  )
                })}

                </div>
              </div>
                </>
              ): (
                <></>
              )}


            </div>
            <div className="col-lg-7">
              <div className="text-section">
                <h2>Search for Units</h2>
                <div className="section-content">
                  <fieldset className="fieldset">
                    <div className="row">
                      <div className="col-md-4 text-center">
                      <label>
                      Search Name:<br />
                      <input
                        type="search"
                        onChange={this.updateSearch}
                        value={this.state.searchText}
                      />
                    </label>
                      </div>
                      <div className="col-md-4 text-center">
                      <label>
                      Search Rules:<br />
                      <select
                        onChange={this.updateRules}
                        value={this.searchRules.toLowerCase()}
                      >
                        <option value="">All</option>
                        <option value="introductory">Introductory</option>
                        <option value="standard">Standard</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </label>
                      </div>
                      <div className="col-md-4 text-center">
                      <label>
                      Search Tech:<br />
                      <select
                        onChange={this.updateTech}
                        value={this.searchTech.toLowerCase()}
                      >
                        <option value="">All</option>
                        <option value="inner sphere">Inner Sphere</option>
                        <option value="clan">Clan</option>
                      </select>
                    </label>
                      </div>
                    </div>
                  </fieldset>

                <h3 className="text-center">Search Results</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Name</th>
                        <th>Intro</th>
                        <th>Rules</th>
                        <th>Tech</th>
                        <th>Tons</th>
                        <th>Type</th>
                        <th>Points</th>

                      </tr>
                    </thead>
                    <tbody>
                    {this.state.searchResults.length > 0 ? (
                      <>
                        {this.state.searchResults.map( (asUnit: IASMULUnit, unitIndex: number) => {
                          return (
                            <tr key={unitIndex}>
                              <td className="text-left min-width no-wrap">


{this.props.appGlobals.currentASForce.getTotalGroups() > 1 ?
  (
    <div className="drop-down-menu-container">
      <Button
        variant="primary"
        className="btn-sm"
        onClick={() => this.toggleContextMenuSearch(unitIndex)}
        title="Open the context menu for this unit"
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <ul
        className={this.state.contextMenuSearch === unitIndex ? "styleless dd-menu active" : "styleless dd-menu"}
      >
        {this.props.appGlobals.currentASForce.groups.map( (asGroup, asGroupIndex) => {
          return (
            <li
              onClick={() => this.addToGroup(asUnit, asGroupIndex)}
              title={"Adds this unit to your group '" + asGroup.getName(asGroupIndex + 1) + "'"}
            >
              <FontAwesomeIcon icon={faPlus} />&nbsp;
              Add to {asGroup.getName(asGroupIndex + 1)}
            </li>
          )
        })}

      </ul>
    </div>
  ) : (
    <Button
      variant="primary"
      className="btn-sm no-right-margin"
      onClick={() => this.addToGroup(asUnit, 0)}
      title="Add this unit to your current group"
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
)}

  <Button
    variant="primary"
    className="btn-sm"
    onClick={() => this.openViewUnit(asUnit)}
    title="View this unit's Alpha Strike Card"
  >
    <FontAwesomeIcon icon={faEye} />
  </Button>
</td>
                              <td>{asUnit.Name}<br/>
                              <span className="statsBlock no-wrap">{asUnit.BFDamageShort}/{asUnit.BFDamageMedium}/{asUnit.BFDamageLong}/{asUnit.BFDamageExtreme} [{asUnit.BFArmor}/{asUnit.BFStructure}]</span>
                              </td>
                              <td>{asUnit.DateIntroduced}</td>
                              <td>{asUnit.Rules}</td>
                              <td>{asUnit.Technology.Name}</td>
                              <td>{asUnit.Tonnage}</td>
                              <td>{asUnit.BFType}</td>
                              <td>{asUnit.BFPointValue}</td>

                            </tr>
                          )
                        })}
                      </>
                    ) : (
                      <>
                      {this.searchRules.length > 2 ? (
                        <tr>
                          <td className="text-center" colSpan={6}>
                            Please type a search term 3 or more characters.
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td className="text-center" colSpan={6}>
                            Sorry, there are no matches with those parameters
                          </td>
                        </tr>
                      )}
                      </>
                    )}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          </UIPage>
        </>
      );
    }
}

interface IHomeProps {
  appGlobals: IAppGlobals;

}

interface IHomeState {
  updated: boolean;
  foundItems: any[];
  searchResults: IASMULUnit[];

  searchText: string;
  showASUnit: AlphaStrikeUnit | null;
  groupIndex: number|null;
  editASUnit: boolean;

  contextMenuGroup: number;
  contextMenuUnit: number;

  contextMenuSearch: number;
}