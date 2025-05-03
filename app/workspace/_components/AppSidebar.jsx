'use client'

import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,

} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Settings2Icon, Video, Videotape, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'


const MenuOptions = [

    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'Create Ad',
        icon: Video,
        path: '/workspace/create-ad'
    },
    {
        title: 'My Videos',
        icon: Videotape,
        path: '/workspace/my-videos'
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing'
    },
    {
        title: 'Settings',
        icon: Settings2Icon,
        path: '/workspace/settings'
    }
]
function AppSidebar() {
    const path = usePathname()
    return (
        <Sidebar>
            <SidebarHeader className={'flex items-center my-5'}>
                <Image src={'/logo.svg'} alt="logo" height={100} width={100} />
            </SidebarHeader>
            <hr />
            <SidebarContent>
                <SidebarGroup>
                    <Button className={'mt-5'}>+ Create New Ad Video</Button>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {MenuOptions.map((item, index) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={'p-5'}> 
                                        <a href={item.path}
                                            className={`text-[17px] ${path==item.path&&'text-primary bg-blue-100'}`}
                                        >
                                            <item.icon className='h-10 w-10'/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar