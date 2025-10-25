"use client"

import React, { useState } from 'react';
import BuyGiftCardSection from './BuyGiftCard.tsx/page';
import SendGiftCardSection from './SendGiftCard/page';
import MyCardsSection from 'components/MycardComp/mycard';
import TransactionHistory from 'components/MycardComp/TransHis';
import { GiftCard, GiftCardTransaction } from 'giftcardtype';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GiftCardApp: React.FC = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'my-cards' | 'buy' | 'send' | 'history'>('my-cards');
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null);

  const HandClick = () => {
    router.push("/UserDashboard")
  }

  // Mock data
  const giftCards: GiftCard[] = [
    {
      id: '1',
      brand: 'Amazon',
      value: 100,
      balance: 75.50,
      currency: 'USD',
      expiryDate: '2024-12-31',
      status: 'active'
    },
    {
      id: '2',
      brand: 'Apple',
      value: 50,
      balance: 50.00,
      currency: 'USD',
      status: 'active'
    },
    {
      id: '3',
      brand: 'Starbucks',
      value: 25,
      balance: 0,
      currency: 'USD',
      status: 'used'
    }
  ];

  const transactions: GiftCardTransaction[] = [
    {
      id: '1',
      date: '2024-01-15',
      description: 'Amazon Purchase - Electronics',
      amount: -24.50,
      type: 'redemption',
      currency: 'USD',
      cardBrand: 'Amazon',
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-01-10',
      description: 'Gift Card Purchase',
      amount: 100,
      type: 'purchase',
      currency: 'USD',
      cardBrand: 'Amazon',
      status: 'completed'
    },
    {
      id: '3',
      date: '2024-01-08',
      description: 'Apple Gift Card',
      amount: 50,
      type: 'purchase',
      currency: 'USD',
      cardBrand: 'Apple',
      status: 'completed'
    },
    {
      id: '4',
      date: '2024-01-05',
      description: 'Starbucks Coffee',
      amount: -25,
      type: 'redemption',
      currency: 'USD',
      cardBrand: 'Starbucks',
      status: 'completed'
    },
    {
      id: '5',
      date: '2024-01-03',
      description: 'Refund - Cancelled Order',
      amount: 15.75,
      type: 'refund',
      currency: 'USD',
      cardBrand: 'Amazon',
      status: 'completed'
    },
    {
      id: '6',
      date: '2024-01-02',
      description: 'Starbucks Gift Card',
      amount: 25,
      type: 'purchase',
      currency: 'USD',
      cardBrand: 'Starbucks',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-13 px-0.5 mb-4 text-sm md:text-md">
      <span className="flex justify-between px-2 -mt-3 mb-13 items-center">
        <p className="flex items-center gap-3">
          <ArrowLeft
            onClick={HandClick}
            className="cursor-pointer"
            size={20} />
          <p className="font-semibold">Gift Cards</p>
        </p>
        <p>
           {[ {id: 'history', name: 'History'} ].map((tab) => (
              <button 
                key={tab.id}
                className="cursor-pointer font-semibold"
                onClick={() => setActiveTab(tab.id as any)}>
                {tab.name}
              </button>
           ))}
        </p>
      </span>
      <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600 mt-2">Manage, <span className='text-green-700'><strong>purchase, and send gift cards</strong></span></p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 mb-6">
          <nav className="flex space-x-3 px-3 text-[12px] md:text-md md:px-6 md:space-x-8" aria-label="Tabs">
            {[
              { id: 'my-cards', name: 'Cards', count: giftCards.length },
              { id: 'buy', name: 'Buy Gift Card' },
              { id: 'send', name: 'Send Gift Card' },
              // { id: 'history', name: 'History' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`${activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                {tab.name}
                {tab.count && (
                  <span className="ml-2 py-0.5 px-2 text-xs bg-blue-100 text-green-800 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
          {activeTab === 'my-cards' && (
            <MyCardsSection
              cards={giftCards}
              selectedCard={selectedCard}
              onSelectCard={setSelectedCard}
            />
          )}

          {activeTab === 'buy' && (
            <BuyGiftCardSection />
          )}

          {activeTab === 'send' && (
            <SendGiftCardSection />
          )}

          {activeTab === 'history' && (
            <TransactionHistory transactions={transactions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftCardApp;