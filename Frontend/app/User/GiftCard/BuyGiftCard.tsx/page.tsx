"use client"
import { useState } from "react";

  const BuyGiftCardSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const brands = [
    { id: 'amazon', name: 'Amazon', logo: '🛒' },
    { id: 'apple', name: 'Apple', logo: '🍎' },
    { id: 'starbucks', name: 'Starbucks', logo: '☕' },
    { id: 'google', name: 'Google', logo: '🔍' },
    { id: 'netflix', name: 'Netflix', logo: '🎬' },
    { id: 'spotify', name: 'Spotify', logo: '🎵' },
  ];

  const presetAmounts = [25, 50, 100, 200, 500];

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Buy Gift Card</h3>
      
      <div className="space-y-6">
        {/* Brand Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Brand
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`p-4 border rounded-lg text-left transition-all ${
                  selectedBrand === brand.id
                    ? 'border-blue-500 ring-2 ring-blue-100 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{brand.logo}</div>
                <div className="font-medium text-gray-900">{brand.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Amount
          </label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset.toString())}
                className={`py-3 border rounded-lg font-medium transition-all ${
                  amount === preset.toString()
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full pl-7 pr-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
                min="1"
                max="1000"
              />
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Order Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Card Value:</span>
              <span className="text-gray-900">${amount || '0'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quantity:</span>
              <span className="text-gray-900">{quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fee:</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total:</span>
              <span>${(parseFloat(amount || '0') * quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          disabled={!selectedBrand || !amount}
          className="w-full bg-green-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Pay from Wallet
        </button>
      </div>
    </div>
  );
};

export default BuyGiftCardSection