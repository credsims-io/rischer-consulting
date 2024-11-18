'use client'

import { ArrowLeftIcon, ArrowRightIcon, ChamferedPinkBackground } from '@/public/assets'
import { Flex, Text, Box, IconButton, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import reviews from '@/public/assets/reviews.json'
import Image from 'next/image'

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeReview = (newIndex: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsTransitioning(false);
        }, 300); // Match this with CSS transition duration
    };

    const nextReview = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        changeReview(newIndex);
    };

    const prevReview = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        changeReview(newIndex);
    };

    // Auto-play functionality
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                nextReview();
            }, 5000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlaying, currentIndex]);

    return (
        <>
            <Flex
                position="relative"
                width="100%"
                mt={{ base: "75px", md: "150px" }}
                direction="column"
                bg={{ base: "#FEF4EC", md: "transparent" }}
                rounded={{ base: "8px   ", md: "0px" }}
            >
                <Flex position="absolute" display={{ base: "none", md: "flex" }} top="0" width="100%" left="0" height="100%">
                    <ChamferedPinkBackground />
                </Flex>
                <Flex
                    zIndex={3}
                    position="relative"
                    direction="column"
                    py={{ base: 6, md: 10 }}
                    px={{ base: 2, md: "115px" }}
                >
                    <Text
                        color="#121212"
                        fontSize={{ base: "24px", md: "48px" }}
                        fontWeight="500"
                        mb={8}
                    >
                        Client Reviews
                    </Text>

                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 4, md: 6 }}
                        h="100%"
                        opacity={isTransitioning ? 0 : 1}
                        transition="opacity 0.3s ease-in-out"
                    >
                        <Box
                            position="relative"
                            minHeight="310px"
                            minWidth="287px"
                            height="100%"
                            overflow="hidden"
                        >
                            <Image
                                src={`/images/${reviews[currentIndex].image}`}
                                alt={reviews[currentIndex].name}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Review Content */}
                        <Flex
                            direction="column"
                            align="start"
                            gap={4}
                            minH="310px"
                            flexGrow={1}
                            justify="space-between"
                        >
                            <Text
                                fontSize={{ base: "16px", md: "18px" }}
                                textAlign="justify"
                                color="#101828"
                            >
                                <span className="text-[#F49953] text-[40px] font-bold">"</span>
                                <br />
                                {reviews[currentIndex].text}
                                <br />
                                <span className="text-[#F49953] text-[40px] font-bold text-end">"</span>
                            </Text>
                            <Box textAlign="start">
                                <Text
                                    fontSize={{ base: "14px", md: "16px" }}
                                    fontWeight="600"
                                    color="#121212"
                                >
                                    - {reviews[currentIndex].name}
                                </Text>
                                <Text
                                    fontSize={{ base: "14px", md: "16px" }}
                                    color="#667085"
                                    mt={1}
                                    maxW="300px"
                                >
                                    {reviews[currentIndex].title}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex gap={8} zIndex={6} position={{ md: "absolute" }} bottom="2%" right="100px" mb={{ base: 4, md: 0 }} px={{ base: 2, md: 0 }}>
                    <IconButton
                        aria-label="Previous review"
                        icon={<ArrowLeftIcon />}
                        onClick={prevReview}
                        variant="outline"
                        borderColor="#D0D5DD"
                        rounded="full"
                        _hover={{ bg: '#F9FAFB' }}
                        size="lg"
                    />
                    <IconButton
                        aria-label="Next review"
                        icon={<ArrowRightIcon />}
                        onClick={nextReview}
                        variant="outline"
                        borderColor="#D0D5DD"
                        rounded="full"
                        _hover={{ bg: '#F9FAFB' }}
                        size="lg"
                    />
                </Flex>
            </Flex>
            <Flex justify="center" mt={-4} display={{ base: "none", md: "flex" }}>
                <Button
                    bg="transparent"
                    border="1px solid #F49953"
                    paddingX={{ base: 4, md: 6 }}
                    paddingY={{ base: 2, md: 3 }}
                    color="#F49953"
                    rounded="4px"
                    fontWeight="700"
                >
                    More Reviews
                </Button>
            </Flex>
        </>
    )
}
