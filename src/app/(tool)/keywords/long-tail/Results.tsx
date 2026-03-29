"use client";

import { formatNumber } from "@/lib/utils";
import Pagination from "../shared/Pagination";
import TableHead from "../shared/TableHead";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

const Results = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
  const getDifficulty = (num: number) => {
    if (Math.abs(num) <= 33.33) {
      return ["Easy", "emerald"];
    } else if (Math.abs(num) <= 66.67) {
      return ["Medium", "orange"];
    } else {
      return ["Hard", "red"];
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  if (!data) return;

  console.log(data.total);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h2 className="text-slate-500">
          <strong className="text-slate-900">{formatNumber(data.total)}</strong>{" "}
          total keywords found
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Keyword
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {data.keywords &&
              data.keywords.map((keyword, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                    {keyword}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        total={new Intl.NumberFormat("en-IN").format(Number(data.total))}
      />
    </div>
  );
};

export default Results;
