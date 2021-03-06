import React from 'react';
import './UnallocatedEquipmentList.scss';
import './CriticalAssignmentContainer.scss';
import {IAppGlobals} from '../AppRouter';
import { ICriticalSlot } from '../../Classes/BattleMech';

export default class UnallocatedEquipmentList extends React.Component<IUnallocatedEquipmentListProps, IUnallocatedEquipmentListState> {
    constructor(props: IUnallocatedEquipmentListProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ul className="critical-assignment-container">
            {this.props.crits.map( (crit, critIndex) => {
                if( crit ) {
                    let selectedClass = "";
                    if( this.props.currentSelectedLocation === "un" && this.props.currentSelectedIndex === critIndex ) {
                        selectedClass = " selected-item";
                    }
                    return (

                    <li
                        key={critIndex}
                        className={"cursor-pointer critical-height-" + crit.crits + selectedClass}
                        onClick={() => this.props.selectItemClick( critIndex, "un", crit)}
                    >
                        <div className="pull-right">({crit.crits})</div>
                        <div className="text-left card-title">{crit.name}</div>
                    </li>

                    )
                } else {
                    return <></>
                }
            })}
            </ul>
        )
    }
}

interface IUnallocatedEquipmentListProps {
    crits: (ICriticalSlot | null)[];
    appGlobals: IAppGlobals;
    currentSelectedIndex: number;
    currentSelectedLocation: string;
    selectItemClick(
        selectedIndex: number,
        selectedLocation: string,
        selectedItem: ICriticalSlot | null
    ): void;
}

interface IUnallocatedEquipmentListState {
}