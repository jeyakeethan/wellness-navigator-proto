import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

const WellnessNavigator = () => {

  return (
    <div class="w-full flex justify-center items-center m-0">
      <div className="items-center justify-center min-h-screen bg-white p-4">

        <div className="bg-white rounded-lg shadow-lg p-8 mt-52 max-w-4xl w-full text-center flex flex-wrap">
          {/* First Row - Full Width for Title */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Welcome to the Wellness Navigator</h2>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 min-w-[250px]">
            <Link to="/navigator" className="w-full h-full text-white">
              <button className="mt-4 w-full text-lg py-6 transition-colors bg-gray-700 hover:bg-gray-600 text-white rounded-md">
                Continue on iPad
              </button>
            </Link>
            <p className="mt-10 text-sm text-gray-600 text-center">
              Use the Wellness Navigator directly on this device to explore cannabis products for your wellness needs.
            </p>
          </div>

          {/* QR Code Column */}
          <div className="flex-1 min-w-[250px] flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <QRCodeSVG value="https://your-app-link.com" size={180} />
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center max-w-xs">
              Scan this QR code to access the Wellness Navigator on your mobile device.
            </p>
          </div>

          {/* Disclaimer Section */}
          <footer className="w-full mt-6 bg-gray-50 p-6 rounded-lg text-center text-lg">
            <p className="leading-relaxed text-center text-sm text-gray-700">
              <span className="font-semibold">Disclaimer:</span> The Wellness Navigator is a scientifically derived tool designed to help people with wellness issues using cannabis products based on clinical research. This is not medical advice. Please consult with a healthcare professional before starting any new treatment.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default WellnessNavigator;
