import { VStack } from "../../VStack"
import s from "./style.module.scss"
import Typo from "../../Typo"
import cs from "classnames"

interface Props {
    icon : React.ReactNode;
    text : string;
    isActive?: boolean;
    onClick : () => void;
}

export default function BottomButton({icon, text, isActive, onClick}: Props) {
    return (
        <VStack align="center" justify="center" className={cs(s.container, isActive && s.active)} gap={8} onClick={onClick}>
            {icon}
            <Typo.XS
                color={isActive ? "inverted" : "secondary"}
                fontWeight="medium"
            >{text}</Typo.XS>
        </VStack>
    )
}