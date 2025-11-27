import React, { useState } from 'react';
import { Upload, Image, MapPin, DollarSign, Home, Layers, Plus, Minus, Check, X, ArrowLeft, Camera } from 'react-feather';
import {Ruler} from "lucide-react"
import Dropzone from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';

const AddToListPage = () => {
  const [step, setStep] = useState(1);
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    bedrooms: 1,
    bathrooms: 1,
    area: '',
    type: 'House',
    amenities: [],
    images: []
  });

  const propertyTypes = ['House', 'Apartment', 'Villa', 'Condo', 'Land', 'Commercial'];
  const amenitiesList = ['Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Furnished', 'Air Conditioning', 'WiFi'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setProperty(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleImageUpload = (acceptedFiles) => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setProperty(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  const removeImage = (index) => {
    const newImages = [...property.images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setProperty(prev => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Property submitted:', property);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-center items-center px-4 py-3">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {i}
                </div>
                {i < 4 && (
                  <div className={`h-1 w-16 ${step > i ? 'bg-green-600' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">List Your Property</h1>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Step {step} of 4
              </div>
            </div>
            <p className="mt-2 opacity-90">Fill in the details to showcase your property to potential buyers</p>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                      <input
                        type="text"
                        name="title"
                        value={property.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., Modern 3-Bedroom Apartment"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={property.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Describe your property in detail..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign className="text-gray-400" size={16} />
                          </div>
                          <input
                            type="number"
                            name="price"
                            value={property.price}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="500,000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                        <select
                          name="type"
                          value={property.type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          {propertyTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Area (sq ft)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Ruler className="text-gray-400" size={16} />
                          </div>
                          <input
                            type="number"
                            name="area"
                            value={property.area}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="1500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4">Location Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="text-gray-400" size={16} />
                        </div>
                        <input
                          type="text"
                          name="address"
                          value={property.address}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter full address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setProperty(prev => ({ ...prev, bedrooms: Math.max(1, prev.bedrooms - 1) }))}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            <Minus size={16} />
                          </button>
                          <div className="flex-1 text-center px-4 py-2">
                            {property.bedrooms}
                          </div>
                          <button
                            type="button"
                            onClick={() => setProperty(prev => ({ ...prev, bedrooms: prev.bedrooms + 1 }))}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setProperty(prev => ({ ...prev, bathrooms: Math.max(1, prev.bathrooms - 1) }))}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            <Minus size={16} />
                          </button>
                          <div className="flex-1 text-center px-4 py-2">
                            {property.bathrooms}
                          </div>
                          <button
                            type="button"
                            onClick={() => setProperty(prev => ({ ...prev, bathrooms: prev.bathrooms + 1 }))}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {amenitiesList.map(amenity => (
                          <button
                            key={amenity}
                            type="button"
                            onClick={() => handleAmenityToggle(amenity)}
                            className={`flex items-center px-3 py-2 rounded-lg border ${property.amenities.includes(amenity) ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-gray-400'}`}
                          >
                            {property.amenities.includes(amenity) ? (
                              <Check className="mr-2" size={16} />
                            ) : (
                              <Plus className="mr-2" size={16} />
                            )}
                            {amenity}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4">Property Images</h2>
                  <div className="space-y-4">
                    <Dropzone
                      onDrop={handleImageUpload}
                      accept="image/*"
                      maxFiles={10}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-green-500 transition-colors bg-gray-50"
                        >
                          <input {...getInputProps()} />
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <Upload className="text-gray-400" size={24} />
                            <p className="text-sm text-gray-600">
                              Drag & drop images here, or click to select
                            </p>
                            <p className="text-xs text-gray-500">
                              (Up to 10 high-quality images)
                            </p>
                          </div>
                        </div>
                      )}
                    </Dropzone>

                    {property.images.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Uploaded Images ({property.images.length})</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {property.images.map((img, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={img.preview}
                                alt={`Property ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Property Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Title:</span>
                            <span className="font-medium">{property.title || '-'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Type:</span>
                            <span className="font-medium">{property.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Price:</span>
                            <span className="font-medium">${property.price || '0'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Area:</span>
                            <span className="font-medium">{property.area || '0'} sq ft</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bedrooms:</span>
                            <span className="font-medium">{property.bedrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bathrooms:</span>
                            <span className="font-medium">{property.bathrooms}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-3">Location & Amenities</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-gray-600 mb-1">Address:</p>
                            <p className="font-medium">{property.address || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">Amenities:</p>
                            <div className="flex flex-wrap gap-2">
                              {property.amenities.length > 0 ? (
                                property.amenities.map(amenity => (
                                  <span key={amenity} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                    {amenity}
                                  </span>
                                ))
                              ) : (
                                <span className="text-gray-500">None selected</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">Images:</p>
                            <p className="font-medium">{property.images.length} uploaded</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="mt-1 mr-2"
                          required
                        />
                        <span className="text-sm text-gray-700">
                          I confirm that all information provided is accurate and I have the right to list this property.
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <Check className="mr-2" size={16} />
                  Submit Listing
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Preview Card */}
        {step > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4 bg-gray-100 border-b">
              <h3 className="font-medium">Listing Preview</h3>
            </div>
            <div className="p-4">
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                {property.images.length > 0 ? (
                  <img
                    src={property.images[0].preview}
                    alt="Property preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Camera size={24} />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-medium truncate">
                    {property.title || 'Your property title'}
                  </h4>
                  <p className="text-white/90 text-sm flex items-center">
                    <MapPin size={12} className="mr-1" />
                    {property.address || 'Property location'}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-500 text-xs">Beds</div>
                  <div className="font-medium">{property.bedrooms}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-500 text-xs">Baths</div>
                  <div className="font-medium">{property.bathrooms}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-500 text-xs">Area</div>
                  <div className="font-medium">{property.area || '0'} sq ft</div>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-green-600">
                  ${property.price || '0'}
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {property.type}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AddToListPage;