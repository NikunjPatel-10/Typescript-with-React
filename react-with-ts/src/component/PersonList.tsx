import React from "react";

type listProps = {
  name: {
    first: string;
    last: string;
  }[];
};

const PersonList = ({ name }: listProps) => {
  return (
    <div>
      {name.map((name) => {
        return (
          <div key={name.last}>
            {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
