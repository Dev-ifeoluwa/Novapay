"use client"
import { useState } from "react";


interface GiftCardTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'purchase' | 'redemption' | 'refund';
  currency: string;
  cardBrand?: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionHistoryProps {
  transactions: GiftCardTransaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  const [filter, setFilter] = useState<'all' | 'purchase' | 'redemption' | 'refund'>('all');

  const filteredTransactions = transactions.filter(transaction => 
    filter === 'all' || transaction.type === filter
  );

  const getTransactionColor = (type: string) => {
    const colors = {
      purchase: 'text-green-600',
      redemption: 'text-red-600',
      refund: 'text-blue-600'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600';
  };

  const getTransactionIcon = (type: string) => {
    const icons = {
      purchase: '🛒',
      redemption: '💳',
      refund: '↩️'
    };
    return icons[type as keyof typeof icons] || '📝';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Transaction History</h3>
        
        {/* Filters */}
        <div className="flex space-x-2">
          {[
            { id: 'all', name: 'All' },
            { id: 'purchase', name: 'Purchases' },
            { id: 'redemption', name: 'Redemptions' },
            { id: 'refund', name: 'Refunds' }
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                filter === filterOption.id
                  ? 'bg-blue-100 border-blue-300 text-blue-700'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filterOption.name}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">
                {getTransactionIcon(transaction.type)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{transaction.description}</div>
                <div className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()} • 
                  <span className="capitalize"> {transaction.type}</span>
                </div>
              </div>
            </div>
            <div className={`font-semibold ${getTransactionColor(transaction.type)}`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
            </div>
          </div>
        ))}
        
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <div className="text-gray-500">No transactions found</div>
            <div className="text-gray-400 text-sm mt-1">Try changing your filters</div>
          </div>
        )}
      </div>

      {/* Export Option */}
      <div className="mt-6 flex justify-end">
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Export History</span>
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory