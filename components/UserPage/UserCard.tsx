import { Avatar, Button, Typography } from "@mui/material";

interface UserCardProps {
  avatarUrl: string;
  name: string;
  email: string;
}

function UserCard({ avatarUrl, name, email }: UserCardProps) {
  return (
    <div className="flex flex-row gap-6 items-center justify-center">
      <Avatar variant="rounded" src={avatarUrl} alt={name} />
      <div className="flex flex-col">
        <Typography variant="h6" color="textPrimary" marginY={-0.5}>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" marginY={-0.5}>
          {email}
        </Typography>
      </div>
      <Button color="error" variant="contained">
        登出
      </Button>
    </div>
  );
}

export default UserCard;
