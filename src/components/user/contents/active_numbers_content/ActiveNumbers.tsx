import RecentTransactions from "../dashboard_content/RecentTransactions";

const ActiveNumbersContent = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Active Numbers
      </h1>
      <RecentTransactions
        tableHeading={[
          "Purchased Numbers",
          "Service",
          "Country",
          "Duration",
          "Code",
        ]}
      />
    </div>
  );
};

export default ActiveNumbersContent;
