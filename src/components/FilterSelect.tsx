import type { ExerciseType } from "../types/Excersize";

interface FilterSelectProps {
  selectedTarget: string;
  setSelectedTarget: React.Dispatch<React.SetStateAction<string>>;
  data: ExerciseType[];
}

function FilterSelect({
  selectedTarget,
  setSelectedTarget,
  data,
}: FilterSelectProps) {
  const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(event.target.value);
  };

  return (
    <div className=" mb-6 flex justify-end">
      <select
        onChange={handleTargetChange}
        value={selectedTarget}
        className="bg-gray-800 text-white p-2 rounded-lg m-4"
      >
        <option value="all">Tüm Egzersizler</option>
        {Array.from(new Set(data?.map((e) => e.target))).map((target) => (
          <option key={target} value={target}>
            {target}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;
