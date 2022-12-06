import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function UserHeader({
  setShowDialog,
  user,
  storage,
  listUserOptions,
}) {
  return (
    <>
      {user ? (
        <>
          <Menu as={'div'} className='relative inline-block'>
            <Menu.Button
              className='w-[45px] h-[45px] bg-gray-100 cursor-pointer rounded-full overflow-hidden border shadow-md transition-all hover:brightness-90'
              title={user.first_name || storage?.path}
            >
              <img alt='avatar' src={user.avatar} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1 '>
                  <div className=' px-2 py-2 border-b border-gray-100 text-sm'>
                    Đăng nhập bởi <b>{storage?.path}</b> 💕
                  </div>

                  {listUserOptions &&
                    listUserOptions.map((item, index) => (
                      <Menu.Item key={index}>
                        {item.key === 'logout' ? (
                          <div
                            className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 hover:bg-violet-500 hover:text-white ${
                              index === listUserOptions.length - 1
                                ? 'border-t border-gray-100 text-red-600 font-semibold'
                                : ''
                            }`}
                            onClick={item.func ? item.func : () => true}
                          >
                            {item.name}
                          </div>
                        ) : (
                          <Link
                            to={item.link}
                            className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 hover:bg-violet-500 hover:text-white ${
                              index === listUserOptions.length - 1
                                ? 'border-t border-gray-100 text-red-600 font-semibold'
                                : ''
                            }`}
                            onClick={item.func ? item.func : () => true}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      ) : (
        <div className='-mt-0.5 flex-shrink-0'>
          <button
            className='text-sm xl:text-base text-heading font-semibold'
            onClick={() => setShowDialog(true)}
          >
            Đăng Nhập
          </button>
        </div>
      )}
    </>
  );
}
