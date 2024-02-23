import React from "react";
import "./componentStyles/tree.css";

function Tree() {
  return (
    <>
      <div className="tree">
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="node" id="n1" style={{ visibility: "hidden" }}>
            8
          </div>
        </div>
        <div className="divider_div">
          <div
            className="row_divider_left"
            style={{ visibility: "hidden" }}
            id="divider1"
          />
          <div
            className="row_divider_right"
            style={{ visibility: "hidden" }}
            id="divider2"
          />
        </div>

        <div className="row">
          <div className="node" id="n2" style={{ visibility: "hidden" }}>
            3
          </div>
          <div className="node" id="n3" style={{ visibility: "hidden" }}>
            10
          </div>
        </div>
        <div className="divider_div2">
          <div className="inner_divider">
            <div
              className="row_divider_left3"
              style={{ visibility: "hidden" }}
              id="divider3"
            />
            <div
              className="row_divider_right3"
              style={{ visibility: "hidden" }}
              id="divider4"
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left4"
              style={{ display: "block", visibility: "hidden" }}
            />
            <div
              className="row_divider_right4"
              style={{ visibility: "hidden" }}
              id="divider5"
            />
          </div>
        </div>
        <div className="row">
          <div className="node" id="n4" style={{ visibility: "hidden" }}>
            1
          </div>
          <div className="node" id="n5" style={{ visibility: "hidden" }}>
            6
          </div>
          <div className="node" style={{ visibility: "hidden" }}></div>
          <div className="node" id="n6" style={{ visibility: "hidden" }}>
            14
          </div>
        </div>
        <div className="divider_div3">
          <div className="inner_divider">
            <div
              className="row_divider_left5"
              style={{ display: "flex", visibility: "hidden" }}
            />
            <div
              className="row_divider_right5"
              style={{ display: "flex", visibility: "hidden" }}
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left6"
              style={{ visibility: "hidden" }}
              id="divider6"
            />
            <div
              className="row_divider_right6"
              style={{ visibility: "hidden" }}
              id="divider7"
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left7"
              style={{ display: "flex", visibility: "hidden" }}
            />
            <div
              className="row_divider_right7"
              style={{ display: "flex", visibility: "hidden" }}
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left8"
              style={{ visibility: "hidden" }}
              id="divider8"
            />
            <div
              className="row_divider_right8"
              style={{ display: "flex", visibility: "hidden" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="node" style={{ visibility: "hidden" }}></div>
          <div className="node" style={{ visibility: "hidden" }}></div>
          <div className="node" id="n7" style={{ visibility: "hidden" }}>
            4
          </div>
          <div className="node" id="n8" style={{ visibility: "hidden" }}>
            7
          </div>
          <div className="node" style={{ visibility: "hidden" }}></div>
          <div className="node" style={{ visibility: "hidden" }}></div>
          <div className="node" id="n9" style={{ visibility: "hidden" }}>
            13
          </div>
          <div className="node" style={{ visibility: "hidden" }}></div>
        </div>
      </div>
    </>
  );
}

export default Tree;
