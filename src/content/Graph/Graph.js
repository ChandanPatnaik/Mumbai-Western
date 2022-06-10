import React from "react";
import "./Graph.css";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { AiOutlineArrowsAlt } from "react-icons/ai";

const gdata = [
  {
    quantity: 0,
    month: "feb",
    growth: 600,
    ngrowth: 450,
  },
  {
    quantity: 200,
    month: "mar",
    growth: 500,
    ngrowth: 600,
  },
  {
    quantity: 400,
    month: "apr",
    growth: 550,
    ngrowth: 530,
  },
  {
    quantity: 600,
    month: "may",
    growth: 450,
    ngrowth: 500,
  },
  {
    quantity: 800,
    month: "july",
    ngrowth: 530,
    growth: 500,
  },
  {
    quantity: 1000,
    month: "aug",
    growth: 530,
    ngrowth: 450,
  },
  {
    month: "aug",
    growth: 490,
    ngrowth: 480,
  },
  {
    month: "oct",
    growth: 400,
    ngrowth: 500,
  },
  {
    month: "nov",
    growth: 550,
    ngrowth: 520,
  },
];

const Graph = () => {
  return (
    <div className="mw__main-part">
      <div className="mw__graph">
        <div className="mw__graph_heading">
          <p>Sales Growth</p>
          <p>Last 12 month</p>
          <AiOutlineArrowsAlt />
        </div>
        <div className="mw__line_graph">
          <>
            <ResponsiveContainer aspect={3}>
              <LineChart data={gdata}>
                <XAxis
                  fontSize="12px"
                  dataKey="month"
                  interval={"preserveStartEnd"}
                />
                <YAxis
                  fontSize="12px"
                  dataKey="quantity"
                  interval={"preserveStartEnd"}
                />
                <Line dataKey="growth" />
                <Line dataKey="ngrowth" />
              </LineChart>
            </ResponsiveContainer>
          </>
        </div>
      </div>
      <div className="mw__graph2">
        <div className="mw__graph2_top">
          <div className="mw__graph2_top_left">
            <h2>Sales Breakdown by Products</h2>
            <p>Last 12 Months</p>
            <p>Total Sales</p>
            <p>₹11,30,000</p>
          </div>
          <div className="mw__graph2_top_right">
            <div class="inner-circle"></div>
            <AiOutlineArrowsAlt />
          </div>
        </div>
        <div className="mw__graph2_bottom">
          <div className="new_bottom-left">
            <p>Service & Repairs</p>
            <p>Wash & Detailing</p>
            <p>Accessories</p>
            <p>Car Trade</p>
            <p>Fastag</p>
            <p>Challan</p>
            <p>Chautter</p>
            <p>Insurance</p>
            <p>Parking</p>
          </div>
          <div className="new_bottom-right">
            <p>59%</p>
            <p>25%</p>
            <p>15%</p>
            <p>15%</p>
            <p>10%</p>
            <p>10%</p>
            <p>10%</p>
            <p>10%</p>
            <p>10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
