export interface GiftCard {
  id: string;
  brand: string;
  value: number;
  balance: number;
  currency: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'used';
}

export interface GiftCardTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'purchase' | 'redemption' | 'refund';
  currency: string;
  cardBrand?: string;
  status: 'completed' | 'pending' | 'failed';
}