import React from "react";

interface ChildrenProps {
  color: string;
}

function Children({ color }: ChildrenProps) {
  return (
    <div>
      {color}
      Children
    </div>
  );
}

export default Children;
