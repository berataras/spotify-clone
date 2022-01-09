import { Menu } from '@headlessui/react'
import {ArrowDownFillIcon, RedirectIcon} from "../Icons";

function User(props) {

    const user = {
        name: 'Berat Aras',
        avatar: 'https://i.scdn.co/image/ab6775700000ee853defd5531c6530af0dbfe53f'
    }

    return (
        <Menu as="nav" className="relative">
            {({open}) => (
                <>
                    <Menu.Button className={`flex items-center h-8 gap-2 ${open ? 'bg-secondary' : 'bg-black'} hover:bg-secondary rounded-full pr-1.5`}>
                        <img className="h-7 w-7 rounded-full object-cover" src={user.avatar} alt={user.name} />
                        <span className="text-sm font-semibold">{user.name}</span>
                        <span className={open ? 'rotate-180 duration-200 ease-out' : ''}>
                            <ArrowDownFillIcon />
                        </span>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 top-full bg-secondary flex flex-col w-48 p-1 rounded translate-y-2 z-10">
                        <Menu.Item>
                            <a href="" className="p-[12px] text-sm hover:bg-[#ffffff1a] flex justify-between items-center">
                                Account
                                <RedirectIcon />
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="" className="p-[12px] text-sm hover:bg-[#ffffff1a]">
                                Profile
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="" className="p-[12px] text-sm hover:bg-[#ffffff1a]">
                                Logout
                            </a>
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

export default User;