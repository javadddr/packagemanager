import { HoverEffect } from "./component/ui/card-hover-effect";

export default function Hero4() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Manage Your Hub’s Inventory",
    description:
      "Track products in each hub, including shipments and received items. Monitor inventory levels, and stay updated on the location of shipped packages.",
    link: "https://www.app.dynamopackage.com/",
  },
  {
    title: "Manage Returns",
    description:
      "Ensure customers and vendors can return packages. Get notifications when shipments are sent, and track if packages are stuck in customs, preparing for expected delivery dates.",
    link: "https://www.app.dynamopackage.com/",
  },
  {
    title: "Manage Vendors & Customers",
    description:
      "Create profiles, view shipments, assign products, and identify the fastest hubs for shipping or receiving products.",
    link: "https://www.app.dynamopackage.com/",
  },
  {
    title: "Monitor Package Journey",
    description:
      "Track from over 2100 carriers globally in one place. View shipping, delivery, and estimated delivery dates, along with transit times.",
    link: "https://www.app.dynamopackage.com/",
  },
  {
    title: "Analytical Dashboard",
    description:
      "Instantly identify issues by viewing the status of packages, carrier transit times, hub inventory, and returns. Address problems proactively.",
    link: "https://www.app.dynamopackage.com/",
  },
  {
    title: "Manage Orders",
    description:
      "Create orders, assign items from inventory, monitor their progress, fulfill them, and track their delivery status!",
    link: "https://www.app.dynamopackage.com/",
  },
];
