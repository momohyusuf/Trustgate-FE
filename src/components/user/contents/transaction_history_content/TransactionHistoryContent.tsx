import { Search } from "lucide-react";
import SelectInputField from "../../../ui/forms/SelectInputField";
import RecentTransactions from "../dashboard_content/RecentTransactions";

const TransactionHistoryContent = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Transaction History
      </h1>

      <div className="flex justify-end mb-4">
        <SelectInputField
          placeholder="Sort by: Newest"
          options={["Sort by: Newest", "Sort by: Oldest"]}
          variant="primary"
          size="small"
          handleInputChange={(value) => console.log(value)}
        />
      </div>

      <div className="bg-primary-200  flex items-center rounded-lg mb-8 text-grey-600 px-3">
        <Search size={24} />
        <input
          type="text"
          className=" placeholder:text-grey-600 p-3 w-full rounded-lg text-grey-600 bg-transparent border-none outline-none"
          placeholder="Search tracking-wider"
        />
      </div>
      <RecentTransactions tableHeading={["Type", "Amount", "Status", "Date"]} />
    </div>
  );
};

export default TransactionHistoryContent;
