import Link from "next/link";

const Header = () => {
  return (
    <header className="flex top-0 z-50 justify-between items-center w-full mb-12">
      {/* Name */}
      <h1 className="text-8xl font-bold text-murky-teal ml-4 mt-4">
        <Link href="/">Caroline Robbins</Link>
      </h1>
      {/* Menu */}
      <nav className="text-lg text-murky-teal mr-4 mt-4">
        <ul className="flex space-x-8">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
