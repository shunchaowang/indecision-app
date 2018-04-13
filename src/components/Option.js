import React from 'react';

const Option = (props) => {
    return (
            <div>
                <li>
                    {props.option}
                    <button
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
    )
};

export default Option;

