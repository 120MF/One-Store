import Button from "@mui/material/Button";
import ComponentCard from "@/components/ComponentCard";

function BRButtonShortcut() {
  return (
    <ComponentCard title="快捷借/归" subtitle="">
      <div className="flex flex-row gap-4">
        <Button className="flex-grow" variant="contained" color="secondary">
          借出
        </Button>
        <Button className="flex-grow" variant="contained" color="success">
          归还
        </Button>
      </div>
    </ComponentCard>
  );
}

export default BRButtonShortcut;
