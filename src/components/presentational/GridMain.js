import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import ComponentE from './ComponentE';
import ComponentF from './ComponentF';
import _ from 'lodash';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class GridMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: this.props.data.layouts
        }
    }
    onLayoutChange(newLayout) {
        console.log("New Layout:", newLayout);
    }
    generateGridItems() {
        const components = this.props.data.components;
        return components.map(function (i) {
            const RenderComponent = i.component;
            return (
                <div key={i.id}>
                    <h3 className="component-heading">{i.title}</h3>
                    <section className="component-body">
                        <RenderComponent />
                    </section>
                </div>
            );
        });
    }
    render() {
        return (
            <ResponsiveReactGridLayout
                className="layout"

                layouts={this.state.layout}
                compactType={'horizontal'}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
                margin={[15, 15]}
                onLayoutChange={this.onLayoutChange}>
                {this.generateGridItems()}
            </ResponsiveReactGridLayout>
        )
    }
};
