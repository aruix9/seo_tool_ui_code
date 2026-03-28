import { formatNumber } from "@/lib/utils";
import { BacklinkDataType } from "../../../../../../types/type";

type Props = {
  mainUrl: string;
  allUrls: string[];
  auditData: { [key: string]: BacklinkDataType };
};

const CardsHeroDomain = ({ mainUrl, allUrls, auditData }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Your Domain Card */}
      {allUrls.map((url, i) => (
        <>
          <div
            key={i}
            className={`bg-white rounded-xl p-5 relative shadow-sm overflow-hidden ${url === mainUrl ? "border-2 border-primary shadow-primary/5 group" : "border border-slate-200"}`}
          >
            {url === mainUrl && (
              <div className="absolute top-0 right-0 p-2">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Current
                </span>
              </div>
            )}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              {url === mainUrl ? `Your Domain` : `Competitor ${i}`}
            </p>
            <h3 className="font-bold text-slate-900 truncate mb-4">{url}</h3>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <p className="text-[10px] text-slate-400 font-medium">
                  Domain Trust
                </p>
                <p className="text-lg font-bold text-primary">
                  {auditData[url]?.domain_inlink_rank}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">
                  Ref Domains
                </p>
                <p className="text-lg font-bold">
                  {formatNumber(auditData[url]?.dofollow_refdomains)}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">
                  Backlinks
                </p>
                <p className="text-lg font-bold">
                  {formatNumber(auditData[url]?.backlinks)}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CardsHeroDomain;
