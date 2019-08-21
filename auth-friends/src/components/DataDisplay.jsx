import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Data from "./Data";

const DataList = props => {
  console.log("TCL: DataList props", props);
  return (
    <>
      <h1>Friend Data</h1>

      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Puff" color="green" height={10} width={80} />
        ) : (
          "Get Friend Data"
        )}
      </button>
      {props.data && props.data.map(res => <Data key={res.id} data={res} />)}
    </>
  );
};

const mapStateToProps = state => {
  console.log("TCL: state", state);
  return {
    isLoading: state.isLoading,

    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(DataList);
