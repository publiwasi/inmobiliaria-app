import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/ModeToggle";

const PrivatePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-amber-400 dark:bg-amber-600">
      <ModeToggle />
      PrivatePage
      <Button>Click me!</Button>
    </div>
  );
};
export default PrivatePage;
