import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Invoices",
};
const Dashboard = () => {
  return (
    <div>
      <ContactForm />
      <ul className="gap-10 flex items-center mt-10">
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
