import React from 'react';
import GiftCardItem from './GiftCardItems';
import CardDetails from './GiftCardDetails';

interface GiftCard {
  id: string;
  brand: string;
  value: number;
  balance: number;
  currency: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'used';
}

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


interface MyCardsSectionProps {
  cards: GiftCard[];
  selectedCard: GiftCard | null;
  onSelectCard: (card: GiftCard) => void;
}

const MyCardsSection: React.FC<MyCardsSectionProps> = ({ cards, selectedCard, onSelectCard }) => {
  const activeCards = cards.filter(card => card.status === 'active');
  const usedCards = cards.filter(card => card.status === 'used');

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
          <div className="text-blue-600 font-semibold">Add Gift Card</div>
          <div className="text-blue-500 text-sm mt-1">Redeem a new card</div>
        </button>
        <button className="bg-green-50 border border-green-200 rounded-lg p-4 text-left hover:bg-green-100 transition-colors">
          <div className="text-green-600 font-semibold">Buy Gift Card</div>
          <div className="text-green-500 text-sm mt-1">Purchase new card</div>
        </button>
        <button className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-left hover:bg-purple-100 transition-colors">
          <div className="text-purple-600 font-semibold">Send Gift Card</div>
          <div className="text-purple-500 text-sm mt-1">Gift to someone</div>
        </button>
      </div>

      {/* Active Cards */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCards.map((card) => (
            <GiftCardItem 
              key={card.id} 
              card={card} 
              isSelected={selectedCard?.id === card.id}
              onClick={() => onSelectCard(card)}
            />
          ))}
        </div>
      </div>

      {/* Used/Expired Cards */}
      {usedCards.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Used Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {usedCards.map((card) => (
              <GiftCardItem 
                key={card.id} 
                card={card} 
                isSelected={false}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      )}

      {/* Card Details */}
      {selectedCard && (
        <CardDetails card={selectedCard} />
      )}
    </div>
  );
};

export default MyCardsSection
