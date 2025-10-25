"use client"

import { useEffect, useState } from "react";

const HistoryTab: React.FC = () => {
  const [conversionHistory, setConversionHistory] = useState<any[]>([]);

  // Mock history data
  useEffect(() => {
    setConversionHistory([
      {
        id: 1,
        fromAmount: 100,
        fromCurrency: 'USD',
        toAmount: 85.25,
        toCurrency: 'EUR',
        rate: 0.8525,
        date: '2024-01-15T14:30:00Z'
      },
      {
        id: 2,
        fromAmount: 50,
        fromCurrency: 'EUR',
        toAmount: 42.75,
        toCurrency: 'GBP',
        rate: 0.855,
        date: '2024-01-15T13:15:00Z'
      },
      {
        id: 3,
        fromAmount: 1000,
        fromCurrency: 'USD',
        toAmount: 145250,
        toCurrency: 'JPY',
        rate: 145.25,
        date: '2024-01-15T12:00:00Z'
      }
    ]);
  }, []);

  const clearHistory = () => {
    setConversionHistory([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-green-900">Conversion History</h3>
        {conversionHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm"
          >
            Clear History
          </button>
        )}
      </div>

      {conversionHistory.length > 0 ? (
        <div className="space-y-4">
          {conversionHistory.map((history) => (
            <div
              key={history.id}
              className="bg-white border border-green-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-400 rounded-full flex items-center justify-center text-white font-bold">
                    💱
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">
                      {history.fromAmount} {history.fromCurrency} → {history.toAmount} {history.toCurrency}
                    </div>
                    <div className="text-sm text-green-600">
                      Rate: 1 {history.fromCurrency} = {history.rate} {history.toCurrency}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600">
                    {new Date(history.date).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-green-500">
                    {new Date(history.date).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-50 text-green-700 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                  Use Again
                </button>
                <button className="flex-1 bg-lime-50 text-lime-700 py-2 rounded-lg text-sm font-medium hover:bg-lime-100 transition-colors">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-green-400 text-6xl mb-4">📊</div>
          <div className="text-green-600 font-semibold">No conversion history</div>
          <div className="text-green-500 text-sm mt-1">
            Your conversion history will appear here
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryTab
