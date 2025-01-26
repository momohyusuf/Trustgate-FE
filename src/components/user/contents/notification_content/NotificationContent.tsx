import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const NotificationContent = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Notifications
      </h1>
      <div className="flex justify-between items-center mb-8">
        <div className="border py-1 px-4 w-fit rounded-md">
          <Checkbox onChange={onChange}>Select all</Checkbox>
        </div>
        <button className="bg-tertiary-100 border py-1 px-4 rounded-md font-inter text-grey-600">
          Clear
        </button>
      </div>

      <div className="overflow-x-scroll">
        <div className="min-w-[500px]">
          {[
            "Your Telegram number +2349127821785 is ready for use!",
            "Code received for Telegram number +2349127821785: 65799 ",
            "Code received for Telegram number +2349127821785: 65799 ",
            "Instagram",
          ].map((msg) => (
            <div key={msg} className="border-b p-4">
              <div className="flex items-center gap-4">
                <Checkbox onChange={onChange}>
                  <span className="italic text-grey-600 font-inter">{msg}</span>
                </Checkbox>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationContent;
