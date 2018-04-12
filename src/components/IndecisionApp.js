import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        };

        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action
                            handleClick={(this.pickOption)}
                            hasOptions={this.state.options.length > 0}
                    />
                    <Options
                            options={this.state.options}
                            handleRemoveAll={this.removeAllOptions}
                    />
                    <AddOption handleAddOption={this.addOption}/>
                </div>
        );
    }

    pickOption() {
        const num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[num];
        alert("option picked: " + option);
    }

    addOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    }

    removeAllOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }
}
