import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = (type: string) => {
    const totalNumber = Number(total.replaceAll(",", ""));
    let offset = searchParams.get("offset");

    if (totalNumber < 50) {
      offset = String(50);
    }

    if (!offset) {
      offset = String(0);
    }

    if (type == "next" && (Number(offset) == 0 || Number(offset) > 0)) {
      offset = String(Number(offset) + 50);
    }

    if (type == "prev" && Number(offset) > 50) {
      offset = String(Number(offset) - 50);
    }

    if (Number(offset) > totalNumber) return;

    const params = new URLSearchParams(searchParams);
    params.set("offset", offset);

    router.push(`?${params.toString()}`);
  };
  return (
    <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <span className="text-xs font-medium text-slate-500">
        {total} Total number of keywords
      </span>
      <div className="flex gap-2">
        <button
          disabled={total <= 50}
          onClick={() => updateParam("prev")}
          className="cursor-pointer p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => updateParam("next")}
          className="cursor-pointer p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
