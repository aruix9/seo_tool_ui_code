import Breadcrumbs from "@/components/shared/breadcrumb";
import Link from "next/link";

const AiPage = () => {
  return (
    <div className="container grow flex flex-col">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Ai", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Ai Summary</h1>
      <div className="flex gap-6">
        <Link href="overview">AI Overview</Link>
        <Link href="discover">AI Discover</Link>
        <Link href="keywords">AI keywords</Link>
      </div>
    </div>
  );
};

export default AiPage;
