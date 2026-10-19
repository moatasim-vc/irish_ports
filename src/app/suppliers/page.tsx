import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import SupplierCategories from "@/components/suppliers/SupplierCategories";
import { supplierCategories, suppliersPage } from "@/content/suppliers";

export const metadata: Metadata = {
  title: suppliersPage.hero.title,
  description: "Find trusted Irish Ports suppliers across more than 160 categories.",
};

export default function SuppliersPage() {
  const { hero, search } = suppliersPage;

  return (
    <>
      <PageHero title={hero.title} banner="suppliers" />
      <section className="section">
        <div className="wrap">
          <SupplierCategories categories={supplierCategories} search={search} />
        </div>
      </section>
      <Partners />
    </>
  );
}
