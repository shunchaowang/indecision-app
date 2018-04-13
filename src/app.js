import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp/>, appRoot);

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        //this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
    name = 'Jan';

    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting());