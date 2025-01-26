import { useState } from "react";
import CustomButton from "../../../ui/buttons/CustomButtom";
import FormInputField from "../../../ui/forms/AuthFormInputField";
import RecentTransactions from "./RecentTransactions";
import { CreditCard, Plus, Users, Phone, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const DashboardContent = () => {
  const [showAddFunds, setShowAddFunds] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <h1
        className={`text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8 ${
          showAddFunds ? "text-center" : "text-left"
        }`}
      >
        {showAddFunds ? "Add Funds" : "Dashboard"}
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
                  <p>₦ 0.00</p>
                </div>
                <CreditCard size={24} color="black" strokeWidth={2} />
              </div>
              <CustomButton
                text={
                  <p className="flex items-center justify-center p-2 lg:gap-4">
                    <Plus /> <span>Top up your account</span>
                  </p>
                }
                variant="primary"
                className="w-full mt-4"
                onClick={() => {
                  setShowAddFunds(true);
                }} // Add onClick function
              />
            </div>
            <div className="bg-white p-4 lg:p-8 rounded-lg text-grey-600">
              <div className="flex justify-between items-start mb-8 font-medium">
                <div>
                  <p>Active Numbers</p>
                  <p>1</p>
                </div>
                <Users size={24} strokeWidth={2} />
              </div>
              <CustomButton
                text={
                  <p className="flex items-center justify-center gap-2 lg:gap-4">
                    <span>Buy virtual numbers</span> <Phone />
                  </p>
                }
                variant="primary"
                className="w-full mt-4"
                onClick={() => {
                  navigate("/dashboard/buy-virtual-numbers");
                }} // Add onClick function
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
              Recent Transactions
            </h1>
            <RecentTransactions />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardContent;

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
