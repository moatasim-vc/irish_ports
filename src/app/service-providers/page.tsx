import type { Metadata } from "next";
import PortsInfoPage from "@/components/ports/PortsInfoPage";
import { serviceProviders } from "@/content/ports";

export const metadata: Metadata = {
  title: serviceProviders.title,
  description: serviceProviders.description,
};

export default function ServiceProvidersPage() {
  return <PortsInfoPage page={serviceProviders} />;
}
