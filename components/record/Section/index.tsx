import { VStack } from "@/components/general/VStack";
import Typo from "@/components/general/Typo";
import s from "./style.module.scss";

interface Props {
    title : string;
    children : React.ReactNode;
}

export default function Section({title, children}: Props) {
    return (
        <VStack fullWidth align="start" justify="start" gap={12} className={s.container}>
            <Typo.XS
                color="secondary"
                fontWeight="medium"
            >
                {title}
            </Typo.XS>
            {children}
        </VStack>
    )
}