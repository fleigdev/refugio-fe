import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="copyrightTest">
        <p>
          Copyright 2022 <Link href="/">Refugio Huella Animal</Link>. All Rights{' '}
        </p>
      </div>
    </footer>
  );
}
