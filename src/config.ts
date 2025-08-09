export const WHATSAPP_NUMBER = '56965004506';
export const PHONE_E164 = '+56965004506';
export const PHONE_DISPLAY = '+56 9 6500 4506';

export const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
