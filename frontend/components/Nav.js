import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </div>
);

export default Nav;
