import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridMain from '../presentational/GridMain';
import ComponentA from '../presentational/ComponentA';
import ComponentB from '../presentational/ComponentB';
import ComponentC from '../presentational/ComponentC';
import ComponentD from '../presentational/ComponentD';
import ComponentE from '../presentational/ComponentE';
import ComponentF from '../presentational/ComponentF';

export default class ComponentData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layouts: {
                lg: [
                    { i: 'a', x: 0, y: 0, w: 2, h: 4, static: false },
                    { i: 'b', x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'c', x: 0, y: 2, w: 3, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'f', x: 4, y: 0, w: 1, h: 2 }
                ],
                md: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'c', x: 4, y: 0, w: 2, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'f', x: 4, y: 0, w: 2, h: 2 }
                ],
                sm: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'f', x: 4, y: 0, w: 1, h: 2 }
                ],
                xs: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'f', x: 4, y: 0, w: 1, h: 2 }
                ],
                xxs: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2, static: false },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                    { i: 'f', x: 4, y: 0, w: 1, h: 2 }
                ]
            },
            components: [
                { id: 'a', name: 'component_a', title: "ComponentA", component: ComponentA },
                { id: 'b', name: 'component_b', title: "ComponentB", component: ComponentB },
                { id: 'c', name: 'component_c', title: "ComponentC", component: ComponentC },
                { id: 'd', name: 'component_d', title: "ComponentD", component: ComponentD },
                { id: 'e', name: 'component_e', title: "ComponentE", component: ComponentE },
                { id: 'f', name: 'component_f', title: "ComponentF", component: ComponentF }
            ]
        }
    }
    render() {
        return <GridMain data={this.state} />
    }
};