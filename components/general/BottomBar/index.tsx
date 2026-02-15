import { HStack } from "../HStack"
import { VStack } from "../VStack"
import s from "./style.module.scss"
import { ClipboardCheck, House, Pencil, User } from "lucide-react"
import BottomButton from "./BottomButton"
import { usePathname, useRouter } from "next/navigation"

export default function BottomBar() {

    const router = useRouter();
    const pathname = usePathname();
    const linkData = [
        {
            icon : <House size={20} color="#8B847F" />,
            text : "홈",
            link : "/"
        },
        {
            icon : <Pencil size={20} color="#8B847F" />,
            text : "기록",
            link : "/record"
        },
        {
            icon : <ClipboardCheck size={20} color="#8B847F" />,
            text : "리포트",
            link : "/report"
        },
        {
            icon : <User size={20} color="#8B847F" />,
            text : "프로필",
            link : "/profile"
        },
    ]

    return (
        <VStack fullWidth className={s.container}>
            <HStack fullWidth align="center" justify="center" className={s.contents} gap={16}>
                {linkData.map((item, index) => (
                    <BottomButton
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        isActive={pathname === item.link}
                        onClick={() => router.push(item.link)}
                    />
                ))}
            </HStack>
        </VStack>
    )
}