import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({loading}) => {
  if (loading) {
    return (
      <div className="loading">
        <ScaleLoader
          color={"#6384e6"}
          size={200}
          width={2}
          loading={loading}
        />
      </div>
    );
  };
};

export default Loading;