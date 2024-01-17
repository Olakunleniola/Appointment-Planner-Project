import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({ObjectList}) => {
  return (
    <div>
      {ObjectList &&
        ObjectList.map(({name, ...description}, index) => {
            return <Tile name={name} key={index} description={description} />
          }
        )
      }
    </div>
  );
};
