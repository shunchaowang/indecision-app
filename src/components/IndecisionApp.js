import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <div className="container">
                        <Action
                                handleClick={(this.pickOption)}
                                hasOptions={this.state.options.length > 0}
                        />
                        <Options
                                options={this.state.options}
                                handleRemoveAll={this.removeAllOptions}
                                handleDeleteOption={this.removeSingleOption}
                        />
                        <AddOption
                                handleAddOption={this.addOption}
                        />
                    </div>
                    <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleModalClose={this.resetPickedOption}
                    />
                </div>
        );
    }

    pickOption = () => {
        const num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[num];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    resetPickedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    addOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    };

    removeSingleOption = (option) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((o) => (option !== o))
            };
        });
    };

    removeAllOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        });
    };
}
