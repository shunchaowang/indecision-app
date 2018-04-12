import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {

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

const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
    );
};

const Action = (props) => {
    return (
            <div>
                <button
                        onClick={props.handleClick}
                        disabled={!props.hasOptions}>
                    What should I do?
                </button>
            </div>
    );
};

const Options = (props) => {
    return (
            <div>
                <button onClick={props.handleRemoveAll}>Remove All</button>
                {props.options.map(o => (
                                <Option key={o} option={o}/>
                        )
                )
                }
            </div>
    );
};

const Option = (props) => {
    return (
            <div>
                <li>
                    {props.option}
                </li>
            </div>
    )
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
    }

    render() {
        return (
                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.handleAddOption}>
                        <input type='text' name='option'/>
                        <button>Add Option</button>
                    </form>
                </div>
        )
    }
}

// JSX - JavaScript XML
var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp/>, appRoot);