import type { Metadata } from "next";
import PortsInfoPage from "@/components/ports/PortsInfoPage";
import { shipRegistration } from "@/content/ports";

export const metadata: Metadata = {
  title: shipRegistration.title,
  description: shipRegistration.description,
};

export default function ShipRegistrationPage() {
  return <PortsInfoPage page={shipRegistration} />;
}
