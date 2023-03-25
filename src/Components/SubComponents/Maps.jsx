import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const Maps = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-50.0, -40.0, 0],
                center: [-2, -3],
                scale: 700
            }}
            style={{height:"100%", width:"100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[104.1954, 35.8617]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#fff",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"China"}
                </text>
            </Annotation>
            <Annotation
                subject={[69.3451, 30.3753]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#fff",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Pakistan"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Maps;
