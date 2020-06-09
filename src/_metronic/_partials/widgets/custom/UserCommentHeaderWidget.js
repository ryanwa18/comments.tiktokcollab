/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"; 
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function UserCommentHeaderWidget({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Header */}
      <div className="card-header bg-success border-0 pt-5">
        <h3 className="card-title font-weight-bolder text-white">User Suggestions for tiktokcollab.com</h3>
      </div>
      {/* Body */}
      <div className="card-body d-flex flex-column">
        <div className="row m-0">
            <div className="col bg-light-primary px-6 py-8 rounded-xl mr-7 mb-7">
              <p className="text-primary font-weight-bold font-size-h1">
                1
              </p>
              <a
                href="#"
                className="text-primary font-weight-bold font-size-h6"
              >
                Total Suggestions
              </a>
            </div>
            <div className="col bg-light-success px-6 py-8 rounded-xl mb-7">
              <p className="text-success font-weight-bold font-size-h1">
                1
              </p>
              <a
                href="#"
                className="text-success font-weight-bold font-size-h6 mt-2"
              >
                Completed Suggestions
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
