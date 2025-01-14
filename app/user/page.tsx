import UserCard from "@/components/UserPage/UserCard";
import UserAccordion from "@/components/UserPage/UserAccordion";
import { Divider } from "@mui/material";

export default function Storage() {
  return (
    <div className="w-full flex flex-col pt-5 justify-center">
      <UserCard avatarUrl="" name="MoonFeather" email="moonbite233@gmail.com" />
      <Divider className="pt-6" />
      <UserAccordion />
    </div>
  );
}
