import * as React from "react";
import RoutingComponent from "./components/routing/routing.componet";
import ToolbarComponent from "./components/toolbar/toolbar.component";

import './app.scss';

export default function App() {
    return (
        <div className="main__container">
            <ToolbarComponent />
            <RoutingComponent />
        </div>
    );
}
