export interface IMerchant extends IMerchantDTO {
  id: string;
  
}

export interface IMerchantDTO  {
  businessName: string;
  email: string;
  phoneNumber: string;
  address: string;
  logoUrl: string;
  password: string;
  workingHours: object;
}