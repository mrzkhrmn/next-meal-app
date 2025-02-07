import React from "react";

export const Filter = () => {
  return (
    <div className="flex items-center gap-4">
      <select
        name="category"
        id="category"
        className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
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
      <select
        name="country"
        id="country"
        className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
      >
        <option value="" className="text-black">
          Filter By Country
        </option>
        <option value="american" className="text-black">
          American
        </option>
        <option value="british" className="text-black">
          British
        </option>
        <option value="canadian" className="text-black">
          Canadian
        </option>
        <option value="chinese" className="text-black">
          Chinese
        </option>
        <option value="croatian" className="text-black">
          Croatian
        </option>
        <option value="egyptian" className="text-black">
          Egyptian
        </option>
        <option value="filipino" className="text-black">
          Filipino
        </option>
        <option value="french" className="text-black">
          French
        </option>
        <option value="greek" className="text-black">
          Greek
        </option>
        <option value="indian" className="text-black">
          Indian
        </option>
        <option value="italian" className="text-black">
          Italian
        </option>
        <option value="japanese" className="text-black">
          Japanese
        </option>
        <option value="malaysian" className="text-black">
          Malaysian
        </option>
        <option value="tunisian" className="text-black">
          Tunisian
        </option>
        <option value="turkish" className="text-black">
          Turkish
        </option>
      </select>
    </div>
  );
};
