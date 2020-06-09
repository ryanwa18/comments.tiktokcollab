/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function UserAddWidget({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title font-weight-bolder">Featured TikTok Followers</h3>
      </div>
      {/* Body */}
      <div className="card-body d-flex flex-column">
       <div className="row">
        <div className="col bg-light-warning px-6 py-8 rounded-xl mb-7">
          <p className="text-warning font-weight-bold font-size-h5">
            If you want to be featured on this list make a comment on one of my TikToks suggesting what I should add to the website.
          </p>
          <a
            href="https://tiktok.com/@_ryanward"
            className="text-warning font-weight-bold font-size-h6 mt-2"
          >
            Make a Comment
          </a>
        </div>
       </div>
        <div className="row">
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-primary mr-5">
              <span className="symbol-label">
                <SVG
                  className="align-self-center"
                  src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="https://tiktok.com/@akgthem3m3r"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                @akgthem3m3r
              </a>
              <span className="text-muted"><a href="https://tiktok.com/@akgthem3m3r">Follow</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
