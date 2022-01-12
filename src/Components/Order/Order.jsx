import React from "react";
import { ItemGrid } from ".";
import { useFetchItems } from "../../hooks";
export const Order = () => {
  const { orderInfo } = useFetchItems();
  return (
    <div>
      <ItemGrid />
    </div>
  );
};
