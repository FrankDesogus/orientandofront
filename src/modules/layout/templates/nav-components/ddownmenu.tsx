import React, { useState } from "react"
import { DropdownMenu } from "@medusajs/ui"
import { open } from "cypress";

const Ddownmenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuIsOpen(true);
    
  };

  const handleMouseLeave = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <div>
        <div
          className="flex items-center justify-between w-full 
        py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
        md:hover:bg-blue md:border-0 md:hover:text-blue-700 
        md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white
         dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-blue"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
        >
          
          <DropdownMenu >
            <DropdownMenu.Trigger>Donna</DropdownMenu.Trigger>
            <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <DropdownMenu.Content >

                <ul 
                  className="mx-auto w-48 py-2 text-sm text-gray-700 dark:text-white bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <div className="px-8 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <DropdownMenu.Item > Abbigliamento  </DropdownMenu.Item>
                    </div>
                  </li>
                  <li>
                    <div className="px-8 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <DropdownMenu.Item>Costumi</DropdownMenu.Item>
                    </div>
                  </li>
                  <li>
                    <div className="px-8 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <DropdownMenu.Item>Borse </DropdownMenu.Item>
                    </div>
                  </li>
                  <li>
                    <div className="px-8 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <DropdownMenu.Item>Vestiti lunghi</DropdownMenu.Item>
                    </div>
                  </li>
                </ul>
              </DropdownMenu.Content>
            </div>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}

export default Ddownmenu
