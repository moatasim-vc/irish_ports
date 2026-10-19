import type { Metadata } from "next";
import PortsInfoPage from "@/components/ports/PortsInfoPage";
import { shippingOperators } from "@/content/ports";

export const metadata: Metadata = {
  title: shippingOperators.title,
  description: shippingOperators.description,
};

export default function ShippingOperatorsPage() {
  return <PortsInfoPage page={shippingOperators} />;
}
