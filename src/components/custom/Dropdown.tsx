import { Settings, User, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/UseAuth";
import { useNavigate } from "react-router-dom";

export function DropdownMenuUser() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleNavigateProfile = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/profile");
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
            <Avatar>
                <AvatarImage className="cursor-pointer" src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'/>
                <AvatarFallback className="cursor-pointer"></AvatarFallback>
            </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span onClick={handleNavigateProfile}>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={() => logout()}>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}