import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WoundCare = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <CardTitle className="text-xl font-semibold text-blue-900">
          Wound Care Documentation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Wound Care Initial/Follow-up Subnotes */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Wound Care Initial/Follow-up Subnotes
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(2)].map((_, rowIndex) => (
                <React.Fragment key={`initial-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`initial-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border-gray-200 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* From Wounds 1-3 Initial/Follow up Notes */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              From Wounds 1-3 Initial/Follow up Notes
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(2)].map((_, rowIndex) => (
                <React.Fragment key={`notes-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`notes-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border-gray-200 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Details for Wound 1 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Details for Wound 1
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(2)].map((_, rowIndex) => (
                <React.Fragment key={`wound1-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound1-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border-gray-200 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Details for Wound 2 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Details for Wound 2
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(2)].map((_, rowIndex) => (
                <React.Fragment key={`wound2-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound2-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border-gray-200 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Details for Wound 3 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Details for Wound 3
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(2)].map((_, rowIndex) => (
                <React.Fragment key={`wound3-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound3-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border-gray-200 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WoundCare;