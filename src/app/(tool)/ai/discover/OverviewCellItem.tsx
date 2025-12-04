import React from "react";

const OverviewCellItem = ({
  obj,
  type,
}: {
  obj: {
    [key: string]: number;
  };
  type: string;
}) => {
  return (
    <div className="flex justify-between px-2">
      <span>{type.replaceAll("_", " ")} -</span>
      <span>{obj[type]?.toFixed(2)}</span>
    </div>
  );
};

export default OverviewCellItem;
