import React from 'react';

const Option = (props) => (
        <div>
            <li>
                {props.option}
                <button
                        className="button button--link"
                        onClick={
                            () => {
                                props.deleteOption(props.option)
                            }
                        }
                >
                    Remove
                </button>
            </li>
        </div>
);

export default Option;

