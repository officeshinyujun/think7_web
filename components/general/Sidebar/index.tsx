'use client';

import { useRouter, usePathname } from "next/navigation";
import s from "./style.module.scss";
import { House, ClipboardCheck, User, Settings, Book } from "lucide-react";
import Typo from "@/components/general/Typo";
import { VStack } from "@/components/general/VStack";
import { HStack } from "@/components/general/HStack";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuth();

    const menuItems = [
        { icon: <House size={20} />, text: "홈", link: "/" },
        { icon: <ClipboardCheck size={20} />, text: "리포트", link: "/report" },
        { icon: <Book size={20} />, text: "라이브러리", link: "/library" },
        { icon: <User size={20} />, text: "프로필", link: "/profile" },
    ];

    const displayName = user?.email?.split('@')[0] || '로그인 해주세요';
    const planLabel = user?.subscription_plan === 'PREMIUM' ? 'Premium' : 'Free';

    return (
        <VStack className={s.container} justify="between" align="start">
            <VStack fullWidth align="start" justify="start" gap={16}>
                <HStack className={s.logo} align="center" gap={10} onClick={() => router.push('/')}>
                    <Image src="/think7_Logo.png" alt="logo" width={36} height={36} />
                    <Typo.LG color="primary" fontWeight="bold">Think7</Typo.LG>
                </HStack>
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.link;
                        const iconColor = isActive ? "#3D7BFF" : "#8B847F";
                        const textColor = isActive ? "brand" : "secondary";
                        
                        return (
                            <HStack
                                key={index} 
                                className={`${s.menuItem} ${isActive ? s.active : ''}`}
                                onClick={() => router.push(item.link)}
                                align="center"
                                gap={12}
                                fullWidth
                            >
                                <div style={{color: iconColor, display: 'flex'}}>
                                    {item.icon}
                                </div>
                                <Typo.MD color={textColor} fontWeight={isActive ? "bold" : "medium"}>
                                    {item.text}
                                </Typo.MD>
                            </HStack>
                        )
                    })}
            </VStack>

            <HStack className={s.userProfile} align="center" justify="between" onClick={() => router.push('/profile')}>
                <HStack align="center" gap={12}>
                    <div className={s.avatar}>
                        {user?.profile_image ? (
                            <Image src={user.profile_image} alt="profile" width={40} height={40} style={{borderRadius: '50%', objectFit: 'cover'}} />
                        ) : (
                            <User size={20} color="#8B847F" />
                        )}
                    </div>
                    <VStack align="start" gap={0}>
                        <Typo.SM color="primary" fontWeight="bold">{displayName}</Typo.SM>
                        <Typo.XS color="secondary" fontWeight="medium">{planLabel}</Typo.XS>
                    </VStack>
                </HStack>
                <Settings size={20} color="#8B847F" />
            </HStack>
        </VStack>
    )
}
