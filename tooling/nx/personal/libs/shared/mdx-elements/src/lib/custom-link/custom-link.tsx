import './custom-link.module.css';
import Link from 'next/link';

export interface CustomLinkProps {
  as: string;
  href: string;
}

export function CustomLink({ as, href, ...otherProps }: CustomLinkProps) {
  return (
    <Link as={as} href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...otherProps} />
    </Link>
  );
}

export default CustomLink;
