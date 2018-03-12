import React, {Component} from 'react'
import ExampleCohortsData from '../tests/data/cohorts'
import {CohortSelector} from "./components/CohortSelector";
import TissueExpressionView from "./components/TissueExpressionView";
import GeneExpressionView from "./components/GeneExpressionView";
import ExamplePathWays from "../tests/data/tgac";
// import ExampleExpression from "../tests/data/expression";
import ExampleExpression from "../tests/data/bulkExpression";
import ExampleSamples from "../tests/data/samples";
import ExampleStyle from "../demo/src/example.css";
import HoverView from "./components/HoverView"
import HoverGeneView from "./components/HoverGeneView";
import update from 'immutability-helper';
import mutationVector from "./mutationVector";
import {FilterSelector} from "./components/FilterSelector";


export default class SampleApp extends Component {

    constructor(props) {
        super(props);


        // let sortedPathway, sortedGene;
        // let sortedPathwayDirection = 'desc';
        // let sortedGeneDirection = 'desc';

        this.state = {
            pathwayData: {
                expression: ExampleExpression,
                pathways: ExamplePathWays,
                samples: ExampleSamples,
            },
            tissueExpressionFilter: '',
            geneExpressionFilter: '',
            geneData: {
                expression: [],
                pathways: [],
                samples: [],
            },
            pathwayHoverData: {
                x: null,
                y: null,
                tissue: null,
                pathway: null,
                score: null
            },
            pathwayClickData: {
                x: null,
                y: null,
                tissue: null,
                pathway: null,
                score: null
            },
            geneHoverData: {
                x: null,
                y: null,
                tissue: null,
                gene: null,
                score: null
            },
            geneClickData: {
                x: null,
                y: null,
                tissue: null,
                pathway: null,
                score: null
            },

        };

        this.hoverPathway = this.hoverPathway.bind(this);
        this.clickPathway = this.clickPathway.bind(this);
        this.hoverGene = this.hoverGene.bind(this);
        this.clickGene = this.clickGene.bind(this);

        this.filterTissueType = this.filterTissueType.bind(this);
        this.filterGeneType = this.filterGeneType.bind(this);

    }

    clickPathway(props) {
        if (props && props.x) {

            this.setState({pathwayClickData: props});

            let selectedTissue = this.state.pathwayClickData.tissue;
            if(selectedTissue==='Header'){
                let selectedPathway = JSON.parse(JSON.stringify(this.state.pathwayClickData.pathway)) ;
                if(selectedPathway.sortOrder){
                    // just swap the order
                    selectedPathway.sortOrder = selectedPathway.sortOrder === 'desc' ? 'asc' : 'desc';
                }
                else{
                    selectedPathway.sortOrder = 'desc';
                }
                let myNewState = JSON.parse(JSON.stringify(selectedPathway));
                this.setState({selectedPathway: myNewState});
                this.setState({pathwayData: JSON.parse(JSON.stringify(this.state.pathwayData))});
            }


            let selectedGenes = this.state.pathwayClickData.pathway.gene;
            let convertedGeneData = JSON.parse(JSON.stringify(this.state.pathwayData));
            convertedGeneData.expression = this.state.pathwayData.expression;

            // this won't change
            convertedGeneData.samples = this.state.pathwayData.samples;
            convertedGeneData.selectedPathway = this.state.pathwayClickData.pathway;


            // create a single gene and label for each one (will want the gene ID at some point)
            let pathwayData = [];
            for (let gene of selectedGenes) {
                let datum = {
                    golabel: convertedGeneData.selectedPathway.golabel,
                    goid: convertedGeneData.selectedPathway.goid,
                    gene: [gene]
                };
                pathwayData.push(datum);
            }
            convertedGeneData.pathways = pathwayData;

            let myNewState = JSON.parse(JSON.stringify(convertedGeneData));
            this.setState({geneData: myNewState});
        }
    }

    hoverPathway(props) {
        if (props && props.x) {
            this.setState({pathwayHoverData: props});
        }
    }

    clickGene(props) {
        if (props && props.x) {
            this.setState({geneClickData: props});
        }
    }

    hoverGene(props) {
        if (props && props.x) {
            this.setState({geneHoverData: props});
        }
    }

    filterTissueType(filter) {
        this.setState({tissueExpressionFilter: filter});
    }

    filterGeneType(filter) {
        console.log('filtering egene :'+filter)
        this.setState({geneExpressionFilter: filter});
    }

    render() {

        const alignTop = {
            marginLeft: '40px',
            paddingLeft: '40px',
            verticalAlign: 'top',
            width: '100px'
        };

        const geneAlignment = {
            paddingTop: '100px',
            marginTop: '100px',
            marginLeft: '40px',
            paddingLeft: '40px',
            verticalAlign: 'top',
            width: '100px'
        };

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <h2>Cohorts</h2>
                            <CohortSelector cohorts={ExampleCohortsData}/>
                            <h2>Mutation Type</h2>
                            <FilterSelector filters={mutationVector} selected={this.state.tissueExpressionFilter}
                                            pathwayData={this.state.pathwayData}
                                            onChange={this.filterTissueType}/>
                            <TissueExpressionView id="pathwayViewId" width="400" height="800"
                                                  data={this.state.pathwayData} titleText="Expression"
                                                  filter={this.state.tissueExpressionFilter}
                                                  onClick={this.clickPathway} onHover={this.hoverPathway}/>
                        </td>
                        <td style={alignTop}>
                            <HoverView title="Hover" data={this.state.pathwayHoverData}/>
                            <HoverView title="Clicked" data={this.state.pathwayClickData}/>
                        </td>
                        {this.state.geneData && this.state.geneData.expression.rows && this.state.geneData.expression.rows.length > 0 &&
                        <td style={geneAlignment}>
                            <h2>Mutation Type</h2>
                            <FilterSelector filters={mutationVector} selected={this.state.geneExpressionFilter}
                                            pathwayData={this.state.geneData}
                                            onChange={this.filterGeneType}/>
                            <GeneExpressionView id="geneViewId" width="400" height="800" data={this.state.geneData}
                                                selected={this.state.geneData.selectedPathway}
                                                filter={this.state.geneExpressionFilter}
                                                onClick={this.clickGene} onHover={this.hoverGene}/>
                        </td>
                        }
                        <td style={alignTop}>
                            <HoverGeneView title="Hover" data={this.state.geneHoverData}/>
                            <HoverGeneView title="Clicked" data={this.state.geneClickData}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

