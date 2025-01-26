import { useState } from "react";
import CustomButton from "../../../ui/buttons/CustomButtom";
import FormInputField from "../../../ui/forms/AuthFormInputField";

import { CreditCard, Plus, MoveLeft } from "lucide-react";

import RecentTransactions from "../dashboard_content/RecentTransactions";

const WalletContent = () => {
  const [showAddFunds, setShowAddFunds] = useState(false);

  return (
    <div>
      <h1
        className={`text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8 ${
          showAddFunds ? "text-center" : "text-left"
        }`}
      >
        {showAddFunds ? "Add Funds" : "Wallet"}
      </h1>
      {showAddFunds ? (
        <AddFundsToWallet setShowAddFunds={setShowAddFunds} />
      ) : (
        <>
          <div className="bg-primary-100 p-4 lg:p-8  w-full rounded-lg grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-4 lg:p-8 rounded-lg text-grey-600">
              <div className="flex justify-between items-start mb-8 font-medium">
                <div>
                  <p>Balance</p>
                  <p>₦ 11,000.00</p>
                </div>
                <CreditCard size={24} color="black" strokeWidth={2} />
              </div>
              <CustomButton
                text={
                  <p className="flex items-center justify-center gap-2 lg:gap-4">
                    <Plus /> <span>Top up your account</span>
                  </p>
                }
                variant="primary"
                className="w-full mt-4"
                onClick={() => {
                  setShowAddFunds(true);
                }}
              />
            </div>
            <div className="bg-white p-4 lg:p-8 rounded-lg text-grey-600">
              <p className="text-center">Quick Top up</p>
              <div className="grid grid-cols-2 gap-4">
                {[500, 1000, 2000, 5000].map((amount, index) => (
                  <button
                    key={index}
                    className="bg-primary-100 p-3 lg:p-4 rounded-lg text-grey-600 w-full mt-4"
                    onClick={() => {
                      setShowAddFunds(true);
                    }}
                  >
                    <p>₦ {amount}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
              Recent Transactions
            </h1>
            <RecentTransactions
              tableHeading={["Type", "Amount", "Status", "Date"]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WalletContent;

function AddFundsToWallet({
  setShowAddFunds,
}: {
  setShowAddFunds: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="max-w-[450px] mx-auto animate-fade">
      <div className="flex items-center mb-8">
        <button
          onClick={() => {
            setShowAddFunds(false);
          }}
          className="flex items-center gap-2 text-primary-400"
        >
          <MoveLeft size={24} />
          <span>Back</span>
        </button>
      </div>
      <div className="bg-primary-100 p-4 lg:p-12  w-full rounded-lg grid gap-8 mb-8 relative">
        <p className="absolute right-5 lg:right-9 top-5 lg:top-9 text-gray-400 font-inter">
          Min: N500
        </p>
        <FormInputField
          handleInputChange={(e) => {
            console.log(e.target.value);
          }}
          name="Enter amount"
        />

        <div className="bg-primary-200 py-2 px-4 rounded-lg ">
          <button className="bg-grey-600 text-white w-full py-4 rounded-md font-medium">
            Submit
          </button>
        </div>

        <p className="text-center text-grey-600 font-inter">
          You will be redirect to Paystack to make payment.
        </p>
      </div>
    </div>
  );
}
