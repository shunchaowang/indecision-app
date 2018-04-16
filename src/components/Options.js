import React from 'react';

import Option from './Option';

const Options = (props) => (
        <div>
            <button
                    onClick={props.handleRemoveAll}
                    disabled={!props.options.length > 0}
            >
                Remove All
            </button>
            <ol>
                {props.options.length == 0 && <p>Please add an option to get started!</p>}
                {
                    props.options.map((o) => (
                            <Option
                                    key={o}
                                    option={o}
                                    deleteOption={props.handleDeleteOption}
                            />
                    ))
                }
            </ol>
        </div>
);

export default Options;
