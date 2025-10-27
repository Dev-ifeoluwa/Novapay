"use client"

import { useState } from "react";

const SendGiftCardSection: React.FC = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Gift Card</h3>
      
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                The recipient will receive an email with instructions to redeem the gift card.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recipient Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient's Email *
              </label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full py-3 rounded outline-0 border-0"
                placeholder="excel001@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient's Name
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full border-gray-300 rounded-lg outline-0 border-0 py-3"
                placeholder="Enter name"
              />
            </div>
          </div>

          {/* Gift Card Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Gift Card
              </label>
              <select className="w-full border-gray-300 border-0 outline-0 rounded-lg py-3">
                <option>Amazon - $50</option>
                <option>Apple - $25</option>
                <option>Starbucks - $20</option>
                <option>Google Play - $15</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Schedule Delivery
              </label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full border-gray-300 rounded-lg outline-0 border-0"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>

        {/* Personal Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Personal Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full border-gray-300 rounded-lg border-0 py-3 outline-0"
            placeholder="Add a personal message for the recipient..."
            maxLength={500}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {message.length}/500
          </div>
        </div>

        {/* Preview */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="text-gray-500 mb-2">Gift Card Preview</div>
          <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white max-w-md mx-auto">
            <div className="text-2xl font-bold mb-2">$50 Gift Card</div>
            <div className="text-lg mb-4">Amazon</div>
            <div className="text-sm opacity-90">To: {recipientName || 'Recipient Name'}</div>
          </div>
        </div>

        {/* Send Button */}
        <button
          disabled={!recipientEmail}
          className="w-full bg-green-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Send Gift Card
        </button>
      </div>
    </div>
  );
};

export default SendGiftCardSection