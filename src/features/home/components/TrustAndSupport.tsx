import React from 'react';
import { Truck, Shield, RefreshCw, CreditCard, Phone, MessageCircle, MapPin } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Free Shipping",
      description: "Free Shipping All Over Nepal"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Genuine",
      description: "We Sell 100% Genuine Products"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-orange-600" />,
      title: "Easy Return Policy",
      description: "3 Days Easy Return Policy"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Secure Payment",
      description: "Shop Online Without Hesitation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      {/* Trust Features Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-50 rounded-full hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Sales & Expert Advice</h2>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phone Numbers */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">01.532.7800</p>
                    <p className="text-gray-500 text-sm">Primary Contact</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
                  <div className="p-3 bg-green-600 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">980.287.0861</p>
                    <p className="text-gray-500 text-sm">Alternative Contact</p>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">CONTACT</h3>
                      <p className="text-gray-600">Get in touch with us</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">24/7 CHAT SUPPORT</h3>
                      <p className="text-gray-600">Always here to help</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="lg:col-span-1">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">OUR LOCATION</h3>
                      <p className="text-gray-700 font-medium">PUTALISADAK-28,</p>
                      <p className="text-gray-700 font-medium">KATHMANDU</p>
                      <div className="mt-4 p-3 bg-white/50 rounded-lg">
                        <p className="text-sm text-gray-600">Visit our store for personalized service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl -z-10"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl -z-10"></div>
      <div className="fixed top-1/2 right-1/4 w-16 h-16 bg-pink-200/20 rounded-full blur-xl -z-10"></div>
    </div>
  );
};

export default TrustSection;