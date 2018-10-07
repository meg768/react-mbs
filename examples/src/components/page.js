import React from 'react';
import {Component, Container} from '../../../src/index.js';


export default class Page extends Component {

    render() {
        var style = {margin:'1em'};

        return (
            <div style={style}>
                <Container>
                    {this.props.children}
                </Container>
            </div>

        );
    }
}