import { useState } from "react";

const someObject = {
  sameData: true,
  quantity: 3,
  otherPrice: 43,
};

function Recepies() {
  const [recipe, setRecipe] = useState(someObject);
  return (
    <div>
      <ul>
          
      </ul>
    </div>
  );
}

export default Recepies;
