import React from 'react';

import Option from './Option';

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

export default Options;
