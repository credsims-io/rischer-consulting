'use client'

import { Flex, Text, Box } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Create motion component from HTML element
const MotionDiv = motion.div;

export default function Raised() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const target = 23836169.00;
            const duration = 2000; // 2 seconds
            const startTime = Date.now();

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                // Easing function for smoother animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                const currentCount = easeOutQuart * target;
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView]);

    const formattedCount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(count);

    return (
        <Flex
            backgroundImage="url('/images/numbers.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height={{ base: "140", md: "350px" }}
            rounded={{ base: "16px", md: "24px" }}
            position="relative"
        >
            <Flex
                position="absolute"
                width="100%"
                zIndex={3}
                top={{ base: "75px", md: "150px" }}
                left={0}
                px={{ base: 6, md: "80px", lg: "115px", xl: "15%", "2xl": "20%" }}
            >
                <Flex
                    background="#FFFFFF"
                    width="100%"
                    borderRadius={{ base: "8px", md: "24px" }}
                    boxShadow="0px 0px 34px 0px rgba(0, 0, 0, 0.08)"
                    paddingY={{ base: 2, md: "50px" }}
                    paddingX={{ base: 4, md: "172px" }}
                    gap={3}
                    direction="column"
                    align="center"
                >
                    <Text
                        color="#667085"
                        fontSize={{ base: "16px", md: "32px" }}
                    >
                        We have raised over
                    </Text>
                    <Box
                        as={MotionDiv}
                        ref={ref}
                        color="#121212"
                        fontSize={{ base: "32px", md: "60px", lg: "80px", xl: "104px" }}
                        letterSpacing={{ base: "3.2px", xl: "8.2px" }}
                        fontWeight="800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition="0.5s ease"
                    >
                        {formattedCount}
                    </Box>
                    <Text
                        color="#667085"
                        fontSize={{ base: "16px", md: "32px" }}
                    >
                        For our clients
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
