import React from "react";
import {useSubheader} from "../../_metronic/layout";
import {
  UserCommentWidget,
  UserCommentHeaderWidget,
  UserAddWidget,
} from "../../_metronic/_partials/widgets";

export const UsersComments = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<>
            <div className="row">
              <div className="col-lg-4">
                <UserCommentHeaderWidget className="card-stretch gutter-b" />
              </div>
              <div className="col-lg-4">
                  <UserCommentWidget className="card-stretch gutter-b" />
              </div>
              <div className="col-lg-4">
                <UserAddWidget className="card-stretch gutter-b"/>
              </div>
            </div>
          </>
  );
};
