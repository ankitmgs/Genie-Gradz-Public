import React from 'react'

const DailySale = () => {
    return (
        <div>
        <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0">Daily Sales</h4>

                    <div className="widget-chart text-center">
                      <div
                        id="morris-donut-example"
                        dir="ltr"
                        style={{ height: "245px" }}
                        className="morris-chart"
                      >
                        <svg
                          height="245"
                          version="1.1"
                          width="705"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            left: "-0.1875px",
                            top: "-0.8px",
                          }}
                        >
                          <desc
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          >
                            Created with Raphaël 2.3.0
                          </desc>
                          <defs
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></defs>
                          <path
                            fill="none"
                            stroke="#ff8acc"
                            d="M352.5,197.5A75,75,0,0,0,423.53058844420985,146.57603591269296"
                            strokeWidth="2"
                            opacity="0"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "0",
                            }}
                          ></path>
                          <path
                            fill="#ff8acc"
                            stroke="#000000"
                            d="M352.5,200.5A78,78,0,0,0,426.3718119819782,147.53907734920068L454.31051010336745,157.00898480819325A107.5,107.5,0,0,1,352.5,230Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <path
                            fill="none"
                            stroke="#5b69bc"
                            d="M423.53058844420985,146.57603591269296A75,75,0,0,0,285.24290809410627,89.31139369659871"
                            strokeWidth="2"
                            opacity="1"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "1",
                            }}
                          ></path>
                          <path
                            fill="#5b69bc"
                            stroke="#000000"
                            d="M426.3718119819782,147.53907734920068A78,78,0,0,0,282.55262441787056,87.98384944446265L251.61436214115946,72.71709054489806A112.5,112.5,0,0,1,459.0458826663148,158.61405386903942Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <path
                            fill="none"
                            stroke="#35b8e0"
                            d="M285.24290809410627,89.31139369659871A75,75,0,0,0,352.4764380554856,197.4999962988984"
                            strokeWidth="2"
                            opacity="0"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "0",
                            }}
                          ></path>
                          <path
                            fill="#35b8e0"
                            stroke="#000000"
                            d="M282.55262441787056,87.98384944446265A78,78,0,0,0,352.47549557770503,200.49999615085432L352.46622787952936,229.99999469508768A107.5,107.5,0,0,1,256.09816826821907,74.92966429845814Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <text
                            x="352.5"
                            y="112.5"
                            textAnchor="middle"
                            fontFamily='"Arial"'
                            fontSize="15px"
                            stroke="none"
                            fill="#000000"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              fontFamily: "Arial",
                              fontSize: "15px",
                              fontWeight: "800",
                            }}
                            fontWeight="800"
                            transform="matrix(1.3504,0,0,1.3504,-123.5209,-42.5001)"
                            strokeWidth="0.7405367815936054"
                          >
                            <tspan
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                              dy="4.7999982833862305"
                            >
                              In-Store Sales
                            </tspan>
                          </text>
                          <text
                            x="352.5"
                            y="132.5"
                            textAnchor="middle"
                            fontFamily="Arial"
                            fontSize="14px"
                            stroke="none"
                            fill="#000000"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              fontFamily: "Arial",
                              fontSize: "14px",
                            }}
                            transform="matrix(1.5625,0,0,1.5625,-198.2813,-70.0313)"
                            strokeWidth="0.64"
                          >
                            <tspan
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                              dy="4.799995422363281"
                            >
                              30
                            </tspan>
                          </text>
                        </svg>
                      </div>
                      <ul className="list-inline chart-detail-list mb-0">
                        <li className="list-inline-item">
                          <h5 style={{ color: "#ff8acc" }}>
                            <i className="fa fa-circle me-1"></i>Series A
                          </h5>
                        </li>
                        <li className="list-inline-item">
                          <h5 style={{ color: "#5b69bc" }}>
                            <i className="fa fa-circle me-1"></i>Series B
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            
        </div>
    )
}

export default DailySale
