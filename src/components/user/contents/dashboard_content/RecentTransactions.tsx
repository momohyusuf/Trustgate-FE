import moment from "moment";
import { Link } from "react-router";
const RecentTransactions = ({ tableHeading }: { tableHeading: string[] }) => {
  return (
    <div className="w-full overflow-scroll overflow-x lg:overflow-x-auto rounded-lg ">
      <table className="w-full text-left min-w-[600px]">
        <thead>
          <tr className="text-grey-600  text-lg font-medium bg-primary-100">
            {[...tableHeading, ""].map((item) => (
              <th key={item} className="font-medium p-4 text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-500 hover:bg-gray-50 hover:text-black cursor-pointer">
            <td className="p-4">Sms</td>
            <td className="p-4">30000</td>
            <td className="p-4 text-[#02542D]">Success</td>
            <td className="p-4">
              {moment(new Date()).format("MMM D, YY, h:mm a")}
            </td>
            <td className="p-4 text-primary-400">
              <Link to={`#`}>View</Link>
            </td>
          </tr>

          <tr className="text-gray-500 hover:bg-gray-50 hover:text-black cursor-pointer">
            <td className="p-4">Sms</td>
            <td className="p-4">30000</td>
            <td className="p-4 text-[#BF6A02]">Pending</td>
            <td className="p-4">
              {moment(new Date()).format("MMM D, YY, h:mm a")}
            </td>
            <td className="p-4 text-primary-400">
              <Link to={`#`}>View</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
