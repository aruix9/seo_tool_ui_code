import AuditHomePage from "./(home)";
import Breadcrumb from "@/components/Layout/Breadcrumb";

const Page = () => {
  return (
    <>
      <div className="bg-background-light font-display text-slate-900 min-h-screen">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Audit Analyse Gap" }
        ]} />
        <AuditHomePage />
      </div>
    </>
  );
};

export default Page;
