import FormInputField from "../../../ui/forms/AuthFormInputField";
import SelectInputField from "../../../ui/forms/SelectInputField";
import RecentTransactions from "../dashboard_content/RecentTransactions";

const BuyVirtualNumberContent = () => {
  return (
    <div>
      <h1
        className={`text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8 `}
      >
        Buy Virtual Number
      </h1>

      <div className="bg-primary-100 p-4 lg:p-8  w-full rounded-lg grid lg:grid-cols-2 gap-8 mb-8">
        {/* <div className="bg-white p-4 lg:p-8 rounded-lg text-grey-600">
         
        </div> */}
        <SelectInputField
          name="Phone Number Service"
          placeholder="Search or select a service"
          options={["Whatsapp", "Twitter"]}
          variant="secondary"
          handleInputChange={(value) => console.log(value)}
        />
        <SelectInputField
          placeholder="Search or select a country"
          name="Country"
          variant="secondary"
          options={["Nigeria", "Ghana"]}
          handleInputChange={(value) => console.log(value)}
        />
        <FormInputField
          name="Cost"
          handleInputChange={(e) => console.log(e.target.value)}
        />

        <div className="bg-primary-200 p-2 rounded-lg text-grey-600 flex items-center gap-4">
          <div>
            <p>Wallet</p>
            <p className="font-semibold text-lg">N0.00</p>
          </div>
          <button className="bg-grey-600 text-white w-full py-4 rounded-md font-medium">
            Buy Number
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
          Recent Sms orders
        </h1>
        <RecentTransactions
          tableHeading={["Order ID", "Number", "Country", "Service", "Amount"]}
        />
      </div>
    </div>
  );
};

export default BuyVirtualNumberContent;
