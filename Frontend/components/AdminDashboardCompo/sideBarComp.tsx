import Image from "next/image";

// components/Sidebar.tsx
export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Transactions', icon: '💳', active: false },
    { name: 'Users', icon: '👥', active: false },
    { name: 'Analytics', icon: '📈', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <div className="bg-green-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          {/* <span className="font-bold">F</span> */}
          <Image src="/favicon.ico" alt="brand logo" width={40} height={40}/>
        </div>
        <h1 className="text-xl font-bold">Shalompay</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}