import * as React from 'react';

export default function RankingCards() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name & Department
            </th>
            <th scope="col" className="px-6 py-3">
              Votes
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">1.</td>

            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese" />
              <div className="pl-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">React Developer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
                Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">2.</td>

            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese" />
              <div className="pl-3">
                <div className="text-base font-semibold">Bonnie Green</div>
                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">3.</td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese" />
              <div className="pl-3">
                <div className="text-base font-semibold">Jese Leos</div>
                <div className="font-normal text-gray-500">jese@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">Vue JS Developer</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
        
        
        </tbody>
      </table>
    </div>
  );
}
