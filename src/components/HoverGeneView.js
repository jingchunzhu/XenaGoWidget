import React from 'react';
import PureComponent from './PureComponent';
import PropTypes from 'prop-types';
import {List,ListItem,ListSubHeader} from "react-toolbox";

export default class HoverGeneView extends PureComponent {
    render() {
        let {data, title} = this.props;
        if(data.tissue){
            return (
                <div>
                    <h4>{title}</h4>
                    {data.tissue !== 'Header' &&
                    <ul>
                        {data.pathway &&
                        <li>
                            Gene: ({data.pathway.gene[0]})
                        </li>
                        }
                        {data.tissue &&
                        <li>
                            Sample: {data.tissue}
                        </li>
                        }
                        {data.expression != null &&
                        <li>
                            Mutation Score: {data.expression}
                        </li>
                        }
                    </ul>
                    }
                    {data.tissue === 'Header' && data.pathway &&
                    <div>
                        Gene: {data.pathway.gene[0]} <br/>
                        Samples Affected: { Number.parseFloat(data.expression * 100.0).toFixed(0) }%
                    </div>
                    }
                </div>
            );
        }
        else{
            return <div></div>
        }
    }
}

HoverGeneView.propTypes = {
    data: PropTypes.any.isRequired,
    title: PropTypes.any.isRequired,
};
