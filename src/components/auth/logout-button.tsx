"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { UI_ROUTES } from "@/utils/ui-routes";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push(UI_ROUTES.BASE);
  };

  return (
    <Button onClick={handleLogout} variant="outline">
      Logout <LogOut className="size-4" />
    </Button>
  );
};

export default LogoutButton;
