import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
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
