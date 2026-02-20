'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import testImage from '@/app/assets/image.png';
import s from './style.module.scss';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

export default function LandingPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && user) {
            router.push('/');
        }
    }, [user, isLoading]);

    if (isLoading) return null;
    if (user) return null;

    return (
        <div className={s.page}>
            {/* ── Navigation ── */}
            <nav className={s.nav}>
                <div className={s.navLogo}>
                    <Image src="/think7_Logo.png" alt="Think7" width={32} height={32} />
                    <span style={{ fontSize: 18, fontWeight: 700, color: '#111' }}>Think7</span>
                </div>
                <div className={s.navActions}>
                    <button className={s.navLoginBtn} onClick={() => router.push('/auth/login')}>
                        로그인
                    </button>
                    <button className={s.navSignupBtn} onClick={() => router.push('/auth/signup')}>
                        시작하기
                    </button>
                </div>
            </nav>

            {/* ── Hero Section ── */}
            <section className={s.hero}>
                <motion.div
                    className={s.heroBadge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ fontSize: 14, color: '#3D7BFF', fontWeight: 500 }}>
                        🧠 AI 기반 사고력 훈련 플랫폼
                    </span>
                </motion.div>

                <motion.h1
                    className={s.heroTitle}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    하루 7분,<br />
                    <span className={s.heroTitleAccent}>사고력을 깨우는 시간</span>
                </motion.h1>

                <motion.p
                    className={s.heroSubtitle}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    매일 엄선된 콘텐츠를 읽고, 질문에 답하며 비판적 사고력을 키워보세요.
                    AI가 당신의 답변을 분석하고, 성장을 함께 합니다.
                </motion.p>

                <motion.div
                    className={s.heroCTA}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <button className={s.ctaPrimary} onClick={() => router.push('/auth/signup')}>
                        무료로 시작하기
                    </button>
                    <button className={s.ctaSecondary} onClick={() => router.push('/auth/login')}>
                        이미 계정이 있어요
                    </button>
                </motion.div>

                <motion.div
                    className={s.heroVisual}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Image src={testImage} alt="Dashboard Preview" fill style={{ objectFit: 'cover' }} />
                </motion.div>
            </section>

            {/* ── Features Section ── */}
            <motion.section
                className={s.features}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
            >
                <motion.p className={s.sectionLabel} variants={fadeUp} transition={{ duration: 0.5 }}>Features</motion.p>
                <motion.h2 className={s.sectionTitle} variants={fadeUp} transition={{ duration: 0.5 }}>왜 Think7인가요?</motion.h2>

                <div className={s.featureGrid}>
                    <motion.div className={s.featureCard} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={`${s.featureIcon} ${s.featureIconAI}`}>🤖</div>
                        <h3 className={s.featureTitle}>AI 심층 분석</h3>
                        <p className={s.featureDesc}>
                            당신의 답변을 AI가 다각도로 분석합니다.
                            논리력, 창의력, 비판적 사고력 점수와 맞춤 피드백을 받아보세요.
                        </p>
                    </motion.div>

                    <motion.div className={s.featureCard} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={`${s.featureIcon} ${s.featureIconContent}`}>📰</div>
                        <h3 className={s.featureTitle}>매일 새로운 콘텐츠</h3>
                        <p className={s.featureDesc}>
                            시사, 과학, 경제 등 다양한 분야의 엄선된 아티클과
                            사고를 자극하는 질문이 매일 제공됩니다.
                        </p>
                    </motion.div>

                    <motion.div className={s.featureCard} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={`${s.featureIcon} ${s.featureIconReport}`}>📊</div>
                        <h3 className={s.featureTitle}>성장 리포트</h3>
                        <p className={s.featureDesc}>
                            누적된 분석 데이터를 통해 나의 사고 패턴과 성장 추이를
                            한눈에 확인할 수 있습니다.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* ── How It Works Section ── */}
            <motion.section
                className={s.howItWorks}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
            >
                <motion.p className={s.sectionLabel} variants={fadeUp} transition={{ duration: 0.5 }}>How It Works</motion.p>
                <motion.h2 className={s.sectionTitle} variants={fadeUp} transition={{ duration: 0.5 }}>3단계로 시작하세요</motion.h2>

                <div className={s.stepsGrid}>
                    <motion.div className={s.step} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={s.stepNumber}>1</div>
                        <h3 className={s.stepTitle}>읽기</h3>
                        <p className={s.stepDesc}>
                            매일 제공되는 아티클을 읽으며 다양한 관점을 접해보세요.
                        </p>
                    </motion.div>

                    <motion.div className={s.step} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={s.stepNumber}>2</div>
                        <h3 className={s.stepTitle}>생각하기</h3>
                        <p className={s.stepDesc}>
                            핵심 질문에 대해 자신만의 생각을 자유롭게 작성하세요.
                        </p>
                    </motion.div>

                    <motion.div className={s.step} variants={fadeUp} transition={{ duration: 0.5 }}>
                        <div className={s.stepNumber}>3</div>
                        <h3 className={s.stepTitle}>분석받기</h3>
                        <p className={s.stepDesc}>
                            AI가 답변을 분석하고 점수와 피드백을 제공합니다.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* ── Bottom CTA ── */}
            <motion.section
                className={s.bottomCTA}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <motion.div className={s.ctaBox} variants={fadeUp} transition={{ duration: 0.6 }}>
                    <h2 className={s.ctaTitle}>오늘부터 사고력을 키워보세요</h2>
                    <p className={s.ctaDesc}>
                        하루 7분이면 충분합니다. 지금 무료로 시작해보세요.
                    </p>
                    <button className={s.ctaStartBtn} onClick={() => router.push('/auth/signup')}>
                        무료로 시작하기
                    </button>
                </motion.div>
            </motion.section>

            {/* ── Footer ── */}
            <footer className={s.footer}>
                <p className={s.footerText}>© 2026 Think7. All rights reserved.</p>
            </footer>
        </div>
    );
}
