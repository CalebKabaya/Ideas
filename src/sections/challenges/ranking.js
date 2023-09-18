import * as React from 'react';
import Avatar1 from "./avartas/Avatar1.png"
import Avatar2 from "./avartas/Avatar2.png"
import Avatar3 from "./avartas/Avatar3.png"
import Avatar4 from "./avartas/Avatar4.png"



export default function RankingCards() {
  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#eaecf0]">
      
      <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400  bg-white border border-[#eaecf0]">
      <caption className="p-5 text-md font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Ranking
        </caption>
        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <img className="w-10 h-10 rounded-full" src={Avatar1} alt="Jese" />
              <div className="pl-3">
                <div className="text-sm font-semibold">Neil Sims</div>
                <div className=" text-xs font-normal text-gray-500">Customer Support</div>
              </div>
            </th>
            <td className="px-6 py-4 text-sm">60</td>
           
           
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">2.</td>

            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img className="w-10 h-10 rounded-full" src={Avatar2} alt="Jese" />
              <div className="pl-3">
                <div className="text-sm font-semibold">Bonnie Green</div>
                <div className="text-xs font-normal text-gray-500">P&D</div>
              </div>
            </th>
            <td className="px-6 py-4">40</td>
           
            
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">3.</td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img className="w-10 h-10 rounded-full" src={Avatar3} alt="Jese" />
              <div className="pl-3">
                <div className="text-sm font-semibold">Jese Leos</div>
                <div className="text-xs font-normal text-gray-500">Life Insurance</div>
              </div>
            </th>
            <td className="px-6 py-4">30</td>
           
           
          </tr>
        
        
        </tbody>
      </table>
    </div>
  );
}
