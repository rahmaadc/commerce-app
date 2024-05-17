import { Category  } from "../public/Svgs"; // Assuming Category is an icon for all categories
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState("");
  const categories = [
    { id: 1, name: "Femme", icon: "FemmeIcon" },
    { id: 2, name: "Homme", icon: "HommeIcon" },
    { id: 3, name: "Electromenager", icon: "ElectromenagerIcon" },
    { id: 4, name: "Eléctroniques", icon: "EléctroniquesIcon" },
  ];

  return (
    <div className="mt-2 mb-1 flex flex-col items-center">
      
      <div className="flex gap-4 mt-2 justify-center">
        {categories.map((cat) => (
          <Link
            to={`/category/${cat.id}`}
            key={cat.id}
            className="flex hover:bg-gray-400 hover:bg-opacity-20 w-fit gap-2 px-2 py-1 flex-row items-center"
            onClick={() => setCategory(cat.name)}
          >
            <Category />
            <p>{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;



