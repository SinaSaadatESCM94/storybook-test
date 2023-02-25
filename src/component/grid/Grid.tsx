import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
// importing components
import GridHeader from "./GridHeader";
import GridContent from "./GridContent";
interface IGrid {
  headerContent: IHeaderContent[];
  gridContent: IGridContent[];
}
interface IHeaderContent {
  item: { name: string; variant: string; style?: CSSProperties };
  index: number;
}
interface IGridContent {
  gridContent: {
    item: {
      firstName: string;
      lastName: string;
      age: number;
      variant?: string;
      style?: CSSProperties;
    };
    index: number;
  };

  contentVariant?: string;
}
function Grid({ headerContent, gridContent }: IGrid) {
  return (
    <div className="w-100 h-auto d-flex flex-column align-items-center justify-content-center">
      <GridHeader headerContent={headerContent} />
      <GridContent gridContent={gridContent} />
    </div>
  );
}

Grid.propTypes = {};

export default Grid;
