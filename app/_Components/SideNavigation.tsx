import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-r  max-sm:border-b-2 max-sm:border-b-white max-sm:mb-4 border-primary-900">
      <ul className="flex flex-row flex-wrap sm:flex-col sm:gap-2  sm:h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              className={`py-3 max-sm:w-fit max-sm:h-fit max-sm:text-sm px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 sm:gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}

        <li className="sm:mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
