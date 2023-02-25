import React, { CSSProperties } from "react";
import PropTypes from "prop-types";

interface IGridContent {
  headerContent: {
    item: { name: string; variant: string; style?: CSSProperties };
    index: number;
  }[];

  gridContent: {
    item: {
      firstName: string;
      lastName: string;
      age: number;
      variant?: string;
      style?: CSSProperties;
    };
    index: number;
  }[];

  contentVariant?: string;
}
function GridContent({
  headerContent,
  gridContent,
  contentVariant,
}: IGridContent) {
  return (
    <div
      className={`w-100 d-flex align-items-center justify-content-center ${contentVariant}`}
    >
      {gridContent.map((eachRow) => {
        console.log(eachRow);
      })}
    </div>
  );
}

GridContent.propTypes = {};

export default GridContent;
