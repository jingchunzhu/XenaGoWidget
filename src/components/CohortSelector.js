import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class CohortSelector extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {cohorts} = this.props;
        return <select>
            {
                cohorts.map(function(c){
                    return <option key={c}
                                   value={c}>{c}</option>;
                })
            }
        </select>
    }
}
CohortSelector.propTypes = {
    cohorts: PropTypes.array.isRequired,
};
