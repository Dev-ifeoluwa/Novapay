"use client"


import Header from 'components/AdminDashboardCompo/header';
import Sidebar from 'components/AdminDashboardCompo/sideBarComp';
import StatsCardCom from 'components/AdminDashboardCompo/statsComponent';
import RecentTransactions from 'components/AdminDashboardCompo/transactionCom';
import UserManagement from 'components/AdminDashboardCompo/userManagement';
import Preloader from 'components/preloader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Transaction, User, StatsCard } from 'types/adminTypes';

const mockStats: StatsCard[] = [
  {
    title: 'Total Revenue',
    value: '₦78,624,563',
    change: 12.5,
    description: 'From last month'
  },
  {
    title: 'Active Users',
    value: '2,847',
    change: 8.2,
    description: 'From last month'
  },
  {
    title: 'Transactions',
    value: '12,847',
    change: -2.1,
    description: 'From last month'
  },
  {
    title: 'Pending Requests',
    value: '23',
    change: 5.7,
    description: 'From last month'
  }
];

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ojo Martins',
    email: 'johnMartins@example.com',
    status: 'active',
    balance: 12500
  },
  {
    id: '2',
    name: 'Alice Awe',
    email: 'jane@example.com',
    status: 'active',
    balance: 8430
  },
  {
    id: '3',
    name: 'Dada Johnson',
    email: 'bob@example.com',
    status: 'inactive',
    balance: 3200
  }
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    user: 'Ojo Martins',
    type: 'deposit',
    amount: 222500,
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: '2',
    user: 'Jane Omotoso',
    type: 'withdrawal',
    amount: 11000,
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: '3',
    user: 'Dada Johnson',
    type: 'transfer',
    amount: 5500,
    date: '2024-01-14',
    status: 'pending'
  },
  {
    id: '4',
    user: 'Alice Awe',
    type: 'deposit',
    amount: 33000,
    date: '2024-01-14',
    status: 'completed'
  }
];

export default function App() {
  const router = useRouter();
  const [dashboard, setDashboard] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("No token found, redirecting to signin.");
      router.push('/Admin/SignIn');
      return;
    }

    const fetchAdminDashboard = async () => {
      const res = await fetch(`${API_URL}/admin-auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'content-type': 'application/json'
        },
        // credentials: "include",
      })
      if (res.ok) {
        const data = await res.json();
        setDashboard(data.dashboard);
      } else if (res.status === 401) {
        console.error("Unauthorized, redirecting to signin.");
        router.push('/Admin/SignIn');
      } else {
        console.error("Failed to fetch dashboard data.");
      }
    }
    fetchAdminDashboard();
  }, [])

  return (
    <>
      {!dashboard ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>

          {/* Mobile sidebar backdrop */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />

            <main className="flex-1 overflow-y-auto p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {mockStats.map((stat, index) => (
                  <StatsCardCom key={index} data={stat} />
                ))}
              </div>

              {/* Charts and Tables Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart placeholder</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart placeholder</p>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="mb-8">
                <RecentTransactions transactions={mockTransactions} />
              </div>

              {/* User Management */}
              <div>
                <UserManagement users={mockUsers} />
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}