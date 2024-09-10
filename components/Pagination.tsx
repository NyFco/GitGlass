import usePaginationStore from "@/stores/usePaginationStore";

const Pagination: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const { page, setPage, max: max_page } = usePaginationStore();

  const handleNext = () => {
    if (page < max_page) {
      setPage(page + 1);
      onChange();
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      onChange();
    }
  };

  const glassStyleClassNames =
    "bg-gray-400 rounded-full p-2 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500 text-[#ffffff]";

  return (
    <div className="flex items-center gap-6 text-[#ffffff]">
      <button
        onClick={handlePrevious}
        className={glassStyleClassNames}
        disabled={page === 1}
      >
        {"<"}
      </button>
      <span>{page}</span>
      <button
        onClick={handleNext}
        className={glassStyleClassNames}
        disabled={page === max_page}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
