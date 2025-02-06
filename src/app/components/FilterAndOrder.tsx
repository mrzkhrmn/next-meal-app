interface FilterAndOrderProps {
  onOrder: (orderValue: string) => void;
}

export const FilterAndOrder = ({ onOrder }: FilterAndOrderProps) => {
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderBy = e.target.value;
    onOrder(orderBy);
  };
  return (
    <div className="flex items-center gap-4">
      <select
        name="orderBy"
        id="orderBy"
        className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
        onChange={handleOrderChange}
      >
        <option value="" className="text-black">
          Order By
        </option>
        <option value="name" className="text-black">
          Name
        </option>
        <option value="country" className="text-black">
          Country
        </option>
        <option value="category" className="text-black">
          Category
        </option>
      </select>
      <select
        name="filterBy"
        id="filterBy"
        className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
      >
        <option value="" className="text-black">
          Filter By
        </option>
        <option value="vegetarian" className="text-black">
          Vegetarian
        </option>
        <option value="beef" className="text-black">
          Beef
        </option>
        <option value="beef" className="text-black">
          Desert
        </option>
      </select>
    </div>
  );
};
