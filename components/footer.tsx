import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">À propos de ce site:</span> fait avec
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend. Vous pouvez trouver le code source
        sur{" "}
        <a
          className="underline"
          href="itms-services://?action=download-manifest&url=https://betterbag.com/NoLoSay/manifest.plist"
          target="_blank"
        >
          mon GitHub
        </a>
        .
      </p>
    </footer>
  );
}
