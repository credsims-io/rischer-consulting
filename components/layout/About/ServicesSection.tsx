"use client"

import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react';
import { OrangeChevronRightIcon } from '@/public/assets';

const ServicesSection = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const services = [
        {
            title: "Grants: Research, Writing, Training & Management",
            description: "Rischer Consulting specializes in Proposal Writing, Grant Writing, and Grant & Compliance Management, ensuring your organization navigates these critical areas with expertise and precision.",
            image: "/images/grants.png",
            link: "/grants"
        },
        {
            title: "Team Training and Development",
            description: "Rischer Consulting specializes in cultivating and refining your workforce to drive sustainable business growth.",
            image: "/images/training.png",
            link: "/team-training"
        },
        {
            title: "Coaching & Leadership Development",
            description: "Rischer Consulting provides highly effective coaching and leadership development services.",
            image: "/images/coaching.png",
            link: "/coaching-leadership"
        },
        {
            title: "Strategic Planning & Instructional Design",
            description: "Rischer Consulting helps clients chart the course for success through our Strategic Planning Services. These services help clients navigate uncertainty and achieve their long-term goals with a clear roadmap.",
            image: "/images/planning.png",
            link: "/strategic-planning"
        }
    ];

    return (
        <Box w="full" paddingX={{ base: "10px", md: "60px", lg: "115px" }} py={12}>
            <Heading className='font-playfair' size={isMobile ? "xl" : "2xl"} mb={6}>Services</Heading>
            <SimpleGrid columns={isMobile ? 1 : 2} spacing={8}>
                {services.map((service, index) => (
                    <Flex key={index}
                        direction="column"
                        h="full"
                        border="1px solid #E4E4E4"
                        rounded="8px"
                        gap={{ base: 6, md: 10 }}
                    >
                        <Box
                            backgroundImage={`url(${service.image})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            borderTopRadius="md"
                            mb={4}
                            height={{ base: "265px", md: "375px" }}
                        />
                        <Flex direction="column" flexGrow={1} gap={4} px={{ base: 4, md: 8 }} pb={{ base: 8, md: 10 }}>
                            <Heading as="h3" size={isMobile ? "md" : "lg"} mb={2}>
                                {service.title}
                            </Heading>
                            <Text mb={4} color="#667085" lineHeight={{ base: "24px", md: "32px" }}>
                                {service.description}
                            </Text>
                            <Link href={service.link} display="flex" alignItems="center" color="#F49953" fontWeight="600" mt="auto">
                                Learn More <OrangeChevronRightIcon />
                            </Link>
                        </Flex>
                    </Flex>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ServicesSection;