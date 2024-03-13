import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-white font-bold text-xl">My Condos App</a>
        </Link>
        <div className="flex space-x-4">
          {/* Add a link to the Add New Condo Form */}
          <Link legacyBehavior href="/add">
            <a className="text-white hover:text-gray-300">Add New Condo</a>
          </Link>
          {/* You can add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;