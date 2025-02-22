import React, { useState } from 'react';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Gender: '',
    Age: '',
    Driving_License: '',
    Region_Code: '',
    Previously_Insured: '',
    Annual_Premium: '',
    Policy_Sales_Channel: '',
    Vintage: '',
    Vehicle_Age_lt_1_Year: '',
    Vehicle_Age_gt_2_Years: '',
    Vehicle_Damage_Yes: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const response = await fetch('http://localhost:5000/predict', {
      const response = await fetch('https://insureflow.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("response: ",response)
      const data = await response.json();
      console.log("data: ",data)
      setPrediction(data.status);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-lg px-8 py-6">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Vehicle Insurance Prediction
            </h2>
            <p className="mt-2 text-xl text-gray-600">
              Fill in the details below to get your insurance prediction
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information Section */}
              <div className="space-y-[4vh]">
                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="Gender"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    name="Age"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter age"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Driving License
                  </label>
                  <select
                    name="Driving_License"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Option</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Region Code
                  </label>
                  <input
                    type="number"
                    name="Region_Code"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter region code"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Previously Insured
                  </label>
                  <select
                    name="Previously_Insured"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Option</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Information Section */}
              <div className="space-y-[4vh]">
                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Annual Premium
                  </label>
                  <input
                    type="number"
                    name="Annual_Premium"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter annual premium"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Policy Sales Channel
                  </label>
                  <input
                    type="number"
                    name="Policy_Sales_Channel"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter sales channel"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Vintage (in days)
                  </label>
                  <input
                    type="number"
                    name="Vintage"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter vintage"
                  />
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Vehicle Age Less Than 1 Year
                  </label>
                  <select
                    name="Vehicle_Age_lt_1_Year"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Option</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Vehicle Age Greater Than 2 Years
                  </label>
                  <select
                    name="Vehicle_Age_gt_2_Years"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Option</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xl font-medium text-gray-700">
                    Vehicle Damage
                  </label>
                  <select
                    name="Vehicle_Damage_Yes"
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select Option</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Get Prediction'
                )}
              </button>
            </div>
          </form>

          {prediction && (
            <div className={`mt-6 p-4 rounded-lg ${
              prediction === 'Response-Yes' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${
                  prediction === 'Response-Yes' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {prediction === 'Response-Yes' ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <h3 className={`text-xl font-medium ${
                    prediction === 'Response-Yes' ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {prediction === 'Response-Yes' 
                      ? 'Customer is likely to be interested in Vehicle Insurance' 
                      : 'Customer is unlikely to be interested in Vehicle Insurance'}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;


