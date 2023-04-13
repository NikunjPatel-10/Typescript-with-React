import React from "react";

function Card(props: any) {
  return (
    <div>
      {props.allresData.map((item: any) => {
        return (
          <p>
            {item.data.id} {item.data.name}
          </p>
        );
      })}
    </div>
  );
}

export default Card;
