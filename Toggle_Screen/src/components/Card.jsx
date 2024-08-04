import React from 'react';

function Card() {
  const handleClick = () => {
    window.open('https://isha.sadhguru.org/mahashivratri/shiva/who-is-shiva-meaning/', '_blank');
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="https://t4.ftcdn.net/jpg/05/97/92/25/360_F_597922554_NchpW6uj35RPOI4yeJeT4ElPxIHbHJlx.jpg" alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lord Shiva</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lord Shiva is one of the principal deities in Hinduism, worshiped as a member of the Holy Trinity (Trimurti) alongside Brahma, the creator, and Vishnu, the preserver. Shiva is often referred to as "The Destroyer," but his role goes beyond mere destruction; he is also associated with regeneration and transformation, representing the cyclical nature of creation, preservation, and dissolution.</p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;