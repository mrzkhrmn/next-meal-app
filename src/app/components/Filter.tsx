import React from "react";

interface FilterProps {
  onFilter: (filterValue: string) => void;
}

export const Filter = ({ onFilter }: FilterProps) => {
  return (
    <div className="flex items-center gap-4">
      <select
        name="category"
        id="category"
        className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="" className="text-black">
          Filter By Category
        </option>
        <option value="beef" className="text-black">
          Beef
        </option>
        <option value="chicken" className="text-black">
          Chicken
        </option>
        <option value="dessert" className="text-black">
          Dessert
        </option>
        <option value="lamb" className="text-black">
          Lamb
        </option>
        <option value="miscellaneous" className="text-black">
          Miscellaneous
        </option>

        <option value="pasta" className="text-black">
          Pasta
        </option>
        <option value="pork" className="text-black">
          Pork
        </option>
        <option value="seafood" className="text-black">
          Seafood
        </option>
        <option value="side" className="text-black">
          Side
        </option>
        <option value="vegetarian" className="text-black">
          Vegetarian
        </option>
      </select>
    </div>
  );
};
