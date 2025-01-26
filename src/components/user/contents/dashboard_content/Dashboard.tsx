import CustomButton from "../../../ui/buttons/CustomButtom";
import RecentTransactions from "./RecentTransactions";
import { CreditCard, Plus, Users, Phone } from "lucide-react";

const DashboardContent = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Dashboard
      </h1>
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
              <p className="flex items-center justify-center gap-4">
                <Plus /> <span>Top up your account</span>
              </p>
            }
            variant="primary"
            className="w-full mt-4"
            onClick={() => {}} // Add onClick function
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
              <p className="flex items-center justify-center gap-4">
                <span>Buy virtual numbers</span> <Phone />
              </p>
            }
            variant="primary"
            className="w-full mt-4"
            onClick={() => {}} // Add onClick function
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
          Recent Transactions
        </h1>
        <RecentTransactions />
      </div>
    </div>
  );
};

export default DashboardContent;
