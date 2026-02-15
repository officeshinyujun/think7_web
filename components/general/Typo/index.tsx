'use client'

import { createContext } from "react";
import s from './style.module.scss';
import cs from 'classnames';

const TypoContext = createContext({});

function TypoMain(props: any) {
    return (
        <TypoContext.Provider value={props}>
            {props.children}
        </TypoContext.Provider>
    )
}

type ColorType = 'primary' | 'secondary' | 'inverted' | 'brand' | 'correct' | 'wrong' | 'background-secondary' | 'background-third' | 'border';
type FontWeightType = 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';

interface TypoProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    color?: ColorType;
    fontWeight?: FontWeightType;
    onClick?: () => void;
}

const getTypoClass = (color?: ColorType, fontWeight?: FontWeightType) => {
    return cs(
        color && s[color],
        fontWeight && s[fontWeight]
    );
}

function XXS({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 10, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function XS({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 12, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function SM({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 14, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function MD({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 16, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function LG({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 20, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function XL({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 24, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

function XXL({ children, className, style, color, fontWeight, onClick }: TypoProps) {
    return (
        <p className={cs(className, getTypoClass(color, fontWeight))} style={{ fontSize: 36, ...style }} onClick={onClick}>
            {children}
        </p>
    )
}

const Typo = Object.assign(TypoMain, {
    XXS,
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL,
})

export default Typo