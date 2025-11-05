import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Invoices",
};
const Dashboard = () => {
  return (
    <div className="flex flex-col items-center w-[1400px] mx-auto">
      <ul className="gap-10 flex items-center mt-10">
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
      </ul>
      <ContactForm />
    </div>
  );
};

export default Dashboard;
