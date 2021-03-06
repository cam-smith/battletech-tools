import React from 'react';
import {IAppGlobals} from '../AppRouter';
import UIPage from '../Components/UIPage';

export default class Settings extends React.Component<ISettingsProps, ISettingsState> {
    constructor(props: ISettingsProps) {
        super(props);
        this.state = {
            updated: false,
        }

        this.setUITheme = this.setUITheme.bind(this);
    }

    setUITheme( event: React.FormEvent<HTMLSelectElement>) {
      let settings = this.props.appGlobals.settings;
      settings.uiTheme = event.currentTarget.value;
      this.props.appGlobals.saveSettings( settings );
    }

    componentDidMount ()  {
      this.props.appGlobals.makeDocumentTitle("Settings");
    }

    render() {
      return (
        <UIPage current="settings" appGlobals={this.props.appGlobals}>
            <div className="row">
              <div className="col-md-6">
                <fieldset className="fieldset">
                  <legend>User Interface</legend>
                  {/* <label>
                    <input
                      type="checkbox"
                      checked={this.props.appGlobals.settings.uiDesaturated}
                      onChange={this.toggleDesaturated}
                    />&nbsp;Desaturated UI
                  </label> */}
                  <select
                      value={this.props.appGlobals.settings.uiTheme}
                      onChange={this.setUITheme}
                  >
                    <option value="">Default</option>
                    <option value="desaturated">Desaturated</option>
                    <option value="retro">Retro</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset className="fieldset">
                  <legend>Data Syncing </legend>
                    (TODO: sync settings/logins)
                  </fieldset>
              </div>
            </div>

        </UIPage>
      );
    }
}

interface ISettingsProps {
  appGlobals: IAppGlobals;
}

interface ISettingsState {
    updated: boolean;

}