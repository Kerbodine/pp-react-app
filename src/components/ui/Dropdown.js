import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BiCaretDownCircle } from "react-icons/bi"

export default function Dropdown({ title, allItems }) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center text-black w-full px-4 py-2 font-bold bg-primary-300 rounded-md transition-colors hover:bg-accent-400 hover:text-white">
            {title}
            <BiCaretDownCircle
              className="relative my-auto ml-2 -mr-1 text-2xl hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="w-auto mt-2 origin-top-right bg-white rounded-md shadow-md">
          {allItems.map((option) => (
            <Menu.Item key={option.key}>
              {({ active }) => (
                  <button
                    className={`${active && 'bg-accent-400'} group hover:text-white flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    key={option.key}
                    onClick={option.func}
                    >
                    <i className="mr-1">{option.icon}</i>
                  {option.title}
                  </button>
              )}
            </Menu.Item>
          ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

// export default function Dropdown({ menuTitle, allItems }) {

//   return (
//     <Menu>
//       <Menu.Button>{menuTitle}</Menu.Button>
      // <Menu.Items>
      //   {allItems.map((option) => (
      //     <Menu.Item>
      //       {({ active }) => (
      //         <a
      //           className={`${active && 'bg-accent-400 w-10 h-10'}`}
      //           key={option.key}
      //           icon={option.icon}
      //           title={option.title}
      //           onclick={option.function}/>
      //       )}
      //     </Menu.Item>
      //   ))}
//         {/* <Menu.Item disabled>
//           <span className="opacity-75">Invite a friend (coming soon!)</span>
//         </Menu.Item> */}
//       </Menu.Items>
//     </Menu>
//   )
// }