import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridMain from './GridMain';
import HelloForm from '../HelloForm/HelloForm';
import ToDo from '../ToDo/ToDo';
import Calculator from '../Calculator/Calculator';
import ComponentD from '../ComponentD/ComponentD';
import ComponentE from '../ComponentE/ComponentE';
import ComponentF from '../ComponentF/ComponentF';

export default class ComponentData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                { id: 'a', name: 'hello_form', title: "HelloForm", component: HelloForm },
                { id: 'b', name: 'to_do', title: "ToDo", component: ToDo },
                { id: 'c', name: 'calculator', title: "Calculator", component: Calculator },
                { id: 'd', name: 'component_d', title: "ComponentD", component: ComponentD },
                { id: 'e', name: 'component_e', title: "ComponentE", component: ComponentE },
                { id: 'f', name: 'component_f', title: "ComponentF", component: ComponentF }
            ],
            layouts: {
                lg: [
                    { i: 'a', x: 0, y: 0, w: 4, h: 2 },
                    { i: 'b', x: 4, y: 0, w: 3, h: 2 },
                    { i: 'c', x: 7, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 0, y: 2, w: 3, h: 2 },
                    { i: 'e', x: 3, y: 2, w: 3, h: 2 },
                    { i: 'f', x: 6, y: 2, w: 2, h: 2 }
                ],
                md: [
                    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
                    { i: 'b', x: 0, y: 2, w: 2, h: 2 },
                    { i: 'c', x: 2, y: 0, w: 2, h: 2 },
                    { i: 'd', x: 4, y: 0, w: 2, h: 2 },
                    { i: 'e', x: 3, y: 2, w: 3, h: 2 },
                    { i: 'f', x: 2, y: 2, w: 1, h: 2 }
                ],
                sm: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
                    { i: 'b', x: 0, y: 2, w: 3, h: 2 },
                    { i: 'c', x: 2, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 1, y: 0, w: 1, h: 2 },
                    { i: 'e', x: 3, y: 2, w: 1, h: 2 },
                    { i: 'f', x: 3, y: 0, w: 1, h: 2 }
                ],
                xs: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
                    { i: 'b', x: 0, y: 2, w: 2, h: 2 },
                    { i: 'c', x: 0, y: 6, w: 1, h: 2 },
                    { i: 'd', x: 1, y: 0, w: 1, h: 2 },
                    { i: 'e', x: 0, y: 4, w: 2, h: 2 },
                    { i: 'f', x: 1, y: 6, w: 1, h: 2 }
                ],
                xxs: [
                    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
                    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
                    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
                    { i: 'd', x: 0, y: 0, w: 1, h: 2 },
                    { i: 'e', x: 1, y: 0, w: 3, h: 2 },
                    { i: 'f', x: 4, y: 0, w: 1, h: 2 }
                ]
            },
            newCounter: 0
        }
    }
    onAddItem() {
        // console.log('adding', 'n' + this.state.newCounter);
        this.setState({
            components: this.state.components.concat({
                id: 'n' + this.state.newCounter,
                x: 0,
                y: Infinity,
                w: 2,
                h: 2,
                name: 'new component',
                title: 'New Component',
                component: ComponentF
            }),
            newCounter: this.state.newCounter + 1
        })
    }
    render() {
        console.log(this.state)
        return <GridMain
            onAddItem={this.onAddItem.bind(this)}
            data={this.state} />
    }
};