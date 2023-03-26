import React from 'react';

function Main({ hotels }) {
  return (
    <main className="mt-20">
      <h2 className="text-2xl mb-4 font-semibold">Hotels list</h2>
      <div>
        {hotels && (
          <div className="flex flex-wrap gap-8">
            {hotels.map((hotel) => (
              <div className="flex flex-col w-36 gap-2">
                <div className="h-32" key={hotel['hotel_id']}>
                  <img
                    className="w-full h-full bg-cover"
                    src={hotel['max_1440_photo_url']}
                    alt={hotel['hotel_name']}
                  />
                </div>
                <p className="text-center text-[13px]">{hotel['hotel_name']}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
