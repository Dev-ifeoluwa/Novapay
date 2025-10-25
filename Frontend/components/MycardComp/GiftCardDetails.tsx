import { GiftCard } from "giftcardtype";

// Card Details Component
const CardDetails: React.FC<{ card: GiftCard }> = ({ card }) => {
  return (
    <div className="mt-6 p-6 mb-10 bg-gray-50 rounded-lg border bg-gradient-to-r from-green-300 to-gray-300">
      <h4 className="text-lg font-semibold mb-4">Card Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Card Number</label>
          <div className="flex items-center mt-1">
            <span className="font-mono text-gray-900">**** **** **** 1234</span>
            <button className="ml-2 text-blue-600 text-sm font-medium">Show</button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">PIN</label>
          <div className="flex items-center mt-1">
            <span className="font-mono text-gray-900">••••</span>
            <button className="ml-2 text-blue-600 text-sm font-medium">Reveal</button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Balance</label>
          <div className="text-xl font-bold text-gray-900 mt-1">
            {card.currency} {card.balance.toFixed(2)}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Status</label>
          <div className="mt-1">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              card.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {card.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex space-x-3">
        <button className="cursor-pointer bg-gradient-to-r from-green-900 to-lime-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
          Use Card
        </button>
        <button className="cursor-pointer border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Share Card
        </button>
        <button className="cursor-pointer border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          View Terms
        </button>
      </div>
    </div>
  );
};

export default CardDetails