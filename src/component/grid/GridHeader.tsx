import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
interface IHeaderContent {
  headerContent: {
    item: { name: string; variant: string; style?: CSSProperties };
    index: number;
  }[];
  headerVariant?: string;
}
function GridHeader({
  headerContent,
  headerVariant = "bg-secondary text-light",
}: IHeaderContent) {
  return (
    <div
      className={`w-100 d-flex align-items-center justify-content-center rounded-top ${headerVariant}`}
    >
      {headerContent.map((eachItem) => {
        return (
          <div
            key={eachItem.index}
            className={`d-flex align-items-center justify-content-center text-capitalize h5 m-0 py-3 ${eachItem.item.variant}`}
            style={eachItem.item.style}
          >
            {eachItem.item.name}
          </div>
        );
      })}
    </div>
  );
}

GridHeader.propTypes = {};

export default GridHeader;
