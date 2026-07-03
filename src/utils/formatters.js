// Formatters for Nigerian Naira and phone numbers

export const formatNaira = (amount) => {
  if (!amount && amount !== 0) return '₦0';
  return '₦' + Number(amount).toLocaleString('en-NG');
};

export const formatNairaRange = (minAmount, maxAmount) => {
  if (!minAmount && !maxAmount) return '₦0';
  if (!maxAmount) return formatNaira(minAmount) + '+';
  return formatNaira(minAmount) + ' - ' + formatNaira(maxAmount);
};

export const formatNigerianPhone = (phone) => {
  if (!phone) return '';
  // Remove non-digits
  const cleaned = phone.replace(/\D/g, '');
  // If starts with 234 (country code), format as +234 XXX XXX XXXX
  if (cleaned.startsWith('234')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  // If starts with 0, replace with +234
  if (cleaned.startsWith('0')) {
    return `+234 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
};

export const validateNigerianPhone = (phone) => {
  if (!phone) return false;
  const cleaned = phone.replace(/\D/g, '');
  // Must be 10 digits (0-based) or 12 digits (234-based)
  return cleaned.length === 10 || cleaned.length === 12;
};

export const normalizeNigerianPhone = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return '+234' + cleaned; // 0805... -> +2340805...
  }
  if (cleaned.length === 12 && cleaned.startsWith('234')) {
    return '+' + cleaned;
  }
  return phone;
};

export const formatMonthlyRent = (yearlyRent) => {
  if (!yearlyRent) return '₦0';
  return formatNaira(Math.round(yearlyRent / 12));
};

export const formatPropertyPrice = (price, listingType = 'sale') => {
  if (listingType === 'rent' || listingType === 'shortlet') {
    return formatNaira(price) + '/year';
  }
  return formatNaira(price);
};

export const getMonthlyEquivalent = (yearlyRent) => {
  return Math.round(yearlyRent / 12);
};

export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatReadableDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const now = new Date();
  const diff = now - d;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return formatDate(date);
};
