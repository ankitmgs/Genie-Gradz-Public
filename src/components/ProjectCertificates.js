import React, { Component } from "react";
import Slider from "react-slick";

export default class ProjectCertificates extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mt-5">
        <h2 style={{marginLeft: "2rem"}}> Project Certificates </h2>
        <Slider {...settings}>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card p-1 m-2" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" width="100%" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}