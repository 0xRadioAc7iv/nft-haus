import Link from "next/link";
import { BarChart3, Home, PlusCircle, Settings, Wallet } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => (
  <Link
    href={href}
    className="flex items-center gap-4 rounded-lg px-2 py-3 text-gray-300 transition-all hover:text-white"
  >
    {icon}
    <span className="text-lg">{label}</span>
  </Link>
);

export const Sidebar: React.FC = () => (
  <div className="flex h-full flex-col gap-2">
    <div className="flex h-[82px] items-center px-6">
      <Link
        className="flex items-center gap-2 font-semibold text-gray-200"
        href="/dashboard/explore"
      >
        <Wallet className="h-6 w-6" />
        <span className="text-lg font-bold">NFT Haus</span>
      </Link>
    </div>
    <div className="flex-1 overflow-auto py-3">
      <span className="text-lg pl-6 font-bold text-white">Overview</span>
      <nav className="grid items-start px-4 text-sm font-medium mt-2">
        <NavItem
          icon={<Home className="h-5 w-5" />}
          label="Explore"
          href="/dashboard/explore"
        />
        <NavItem
          icon={<PlusCircle className="h-5 w-5" />}
          label="Create NFT"
          href="/dashboard/create-nft"
        />
        <NavItem
          icon={<BarChart3 className="h-5 w-5" />}
          label="Collections"
          href="/dashboard/collections"
        />
        <NavItem
          icon={<Settings className="h-5 w-5" />}
          label="Profile"
          href="/dashboard/profile"
        />
      </nav>
    </div>
  </div>
);
