export const WHATSAPP_NUMBER = '56945990184';
export const PHONE_E164 = '+56945990184';
export const PHONE_DISPLAY = '+56 9 4599 0184';

export const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
