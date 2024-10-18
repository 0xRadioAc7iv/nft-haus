import Link from "next/link";
import {
  BarChart3,
  Home,
  Image as ImageIcon,
  PlusCircle,
  Settings,
  Wallet,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
  >
    {icon}
    {label}
  </Link>
);

export const Sidebar: React.FC = () => (
  <div className="flex h-full flex-col gap-2">
    <div className="flex h-[60px] items-center px-6">
      <Link
        className="flex items-center gap-2 font-semibold text-white"
        href="#"
      >
        <Wallet className="h-6 w-6" />
        <span>NFT Haus</span>
      </Link>
    </div>
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <span className="text-lg pl-3">Overview</span>
        <NavItem icon={<Home className="h-5 w-5" />} label="Explore" href="#" />
        <NavItem
          icon={<BarChart3 className="h-5 w-5" />}
          label="OffRamp"
          href="#"
        />
        <NavItem
          icon={<PlusCircle className="h-5 w-5" />}
          label="Create NFT"
          href="#"
        />
        <NavItem
          icon={<Settings className="h-5 w-5" />}
          label="Profile"
          href="#"
        />
      </nav>
    </div>
  </div>
);
