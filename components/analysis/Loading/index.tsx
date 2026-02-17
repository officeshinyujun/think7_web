import { VStack } from "@/components/general/VStack";
import Typo from "@/components/general/Typo";
import s from "./style.module.scss";
import Image from "next/image";

export default function AnalysisLoading() {
    return (
        <div className={s.container}>
             <VStack fullHeight justify="center" align="center" gap={24}>
                <div className={s.iconWrapper}>
                    <Image src="/think7_Logo.png" alt="logo" width={80} height={80} className={s.logo} />
                </div>
                <VStack align="center" gap={8}>
                    <Typo.LG color="primary" fontWeight="bold">AI가 사고력을 분석하고 있습니다...</Typo.LG>
                    <Typo.SM color="secondary" fontWeight="medium">잠시만 기다려주세요.</Typo.SM>
                </VStack>
             </VStack>
        </div>
    )
}
