import AnchorList from "./AnchorList";
import RefDomainList from "./RefDomainList";
import SingleCard from "./SingleCard";
import SingleSummaryCards from "./SingleSummaryCards";

const SingleUrl = ({ backlinkData, auditKeys }) => {
  const { metrics, summary } = backlinkData;

  return (
    <>
      <SingleCard metrics={metrics[0]} />
      <SingleSummaryCards
        auditKeys={auditKeys}
        summary={summary[0]}
        metrics={metrics[0]}
      />
      <div className="flex mt-6 gap-6">
        <AnchorList />
        <RefDomainList />
      </div>
    </>
  );
};

export default SingleUrl;
