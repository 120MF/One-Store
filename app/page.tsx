import BorrowedPieChart from "@/components/HomePage/BorrowedPieChart";
import BRLineChart from "@/components/HomePage/BRLineChart";
import BRButtonGroup from "@/components/HomePage/BRButtonShortcut";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-5 justify-center">
      <BRButtonGroup />
      <BorrowedPieChart />
      <BRLineChart />
    </div>
  );
}
