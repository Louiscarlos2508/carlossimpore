"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath || `/${nextLocale}`);
  };

  return (
    <button 
      onClick={toggleLocale}
      className="pointer-events-auto flex items-center space-x-2 glass-surface px-4 py-2 border border-white/5 hover:border-logic-neon/30 transition-all group"
    >
      <span className={`text-[10px] font-mono font-black italic uppercase tracking-widest ${locale === 'en' ? 'text-logic-neon' : 'text-meta-ghost'}`}>
        EN
      </span>
      <div className="w-px h-3 bg-white/10" />
      <span className={`text-[10px] font-mono font-black italic uppercase tracking-widest ${locale === 'fr' ? 'text-logic-neon' : 'text-meta-ghost'}`}>
        FR
      </span>
    </button>
  );
};
