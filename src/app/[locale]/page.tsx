"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useContext } from "react";
import { TestContext } from "@/contexts/testContext";

export default function Home({ params }: Params) {
  const t = useTranslations("Index");
  const router = useRouter();

  const testContext = useContext(TestContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <div>
        <h1>{t("title")}</h1>
      </div>

      {testContext?.showDiv && (
        <div className="w-full h-20 bg-red-200 flex items-center justify-center">
          This div should persist
        </div>
      )}

      <button
        onClick={() => {
          testContext?.setShowDiv((prevValue) => !prevValue);
          router.push(`/${params.locale === "nl" ? "en" : "nl"}`);
        }}
        className="p-4 border-2 border-black"
      >
        LANGUAGE CHANGE
      </button>
    </main>
  );
}
