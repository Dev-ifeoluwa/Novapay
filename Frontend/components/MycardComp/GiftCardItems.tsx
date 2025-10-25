import { GiftCard } from "giftcardtype";

// Gift Card Item Component
const GiftCardItem: React.FC<{ card: GiftCard; isSelected: boolean; onClick: () => void }> = ({ 
  card, 
  isSelected, 
  onClick 
}) => {
  const getBrandColor = (brand: string) => {
    const colors: { [key: string]: string } = {
      Amazon: 'bg-yellow-500',
      Apple: 'bg-gray-800',
      Starbucks: 'bg-green-600',
      Default: 'bg-blue-500'
    };
    return colors[brand] || colors.Default;
  };

  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected 
          ? 'border-green-500 ring-2 ring-blue-100 bg-blue-50' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${getBrandColor(card.brand)} flex items-center justify-center`}>
          <span className="text-white font-bold text-sm">
            {card.brand.charAt(0)}
          </span>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          card.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {card.status}
        </span>
      </div>
      
      <h4 className="font-semibold text-gray-900">{card.brand}</h4>
      <div className="mt-2 space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Balance:</span>
          <span className="font-semibold text-gray-900">
            {card.currency} {card.balance.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Original:</span>
          <span className="text-gray-900">{card.currency} {card.value.toFixed(2)}</span>
        </div>
        {card.expiryDate && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Expires:</span>
            <span className="text-gray-900">{new Date(card.expiryDate).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftCardItem