/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function UserCommentWidget({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title font-weight-bolder ">User Suggestion</h3>
      </div>
      {/* Body */}
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="align-self-center"
                  src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
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
        <div className="pt-5">
          <p className="text-center font-weight-normal font-size-lg pb-7">
            Hmmmm maybe your followers usernames?
          </p>
        </div>
      </div>
    </div>
  );
}
