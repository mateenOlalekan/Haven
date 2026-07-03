// Validators for Nigerian inputs
import { validateNigerianPhone } from './formatters.js';

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone) => {
  return validateNigerianPhone(phone);
};

export const validateMinPrice = (min) => {
  return !isNaN(min) && Number(min) > 0;
};

export const validateMaxPrice = (min, max) => {
  return !isNaN(max) && Number(max) >= Number(min);
};

export const validateBedrooms = (bedrooms) => {
  return !isNaN(bedrooms) && Number(bedrooms) >= 0 && Number(bedrooms) <= 10;
};

export const validateBathrooms = (bathrooms) => {
  return !isNaN(bathrooms) && Number(bathrooms) >= 0 && Number(bathrooms) <= 10;
};

export const validatePropertyTitle = (title) => {
  return title && title.trim().length >= 5 && title.trim().length <= 200;
};

export const validatePropertyDescription = (description) => {
  return description && description.trim().length >= 20 && description.trim().length <= 2000;
};

export const validateLocation = (location) => {
  return location && location.trim().length > 0;
};

export const validateAgentName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 100;
};

export const getErrorMessage = (field, validation) => {
  const messages = {
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid Nigerian phone number (e.g., +234 802 123 4567)',
    minPrice: 'Price must be greater than 0',
    maxPrice: 'Max price must be equal to or greater than min price',
    bedrooms: 'Bedrooms must be between 0 and 10',
    bathrooms: 'Bathrooms must be between 0 and 10',
    title: 'Title must be between 5 and 200 characters',
    description: 'Description must be between 20 and 2000 characters',
    location: 'Location is required',
    name: 'Name must be between 2 and 100 characters',
  };
  return messages[field] || 'Invalid input';
};
