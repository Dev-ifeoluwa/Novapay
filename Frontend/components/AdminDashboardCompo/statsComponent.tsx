import type { StatsCard } from "types/adminTypes";

interface StatsCardProps {
  data: StatsCard;
}

export default function StatsCardCom({ data }: StatsCardProps) {
  const isPositive = data.change >= 0;
  
  return (
    <div className="bg-green-200 cursor-pointer rounded-lg shadow p-6">
      <h3 className="text-gray-500 text-sm font-medium">{data.title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{data.value}</p>
      <div className="flex items-center mt-2">
        <span className={`flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? '↑' : '↓'} {Math.abs(data.change)}%
        </span>
        <span className="text-gray-500 text-sm ml-2">{data.description}</span>
      </div>
    </div>
  );
}