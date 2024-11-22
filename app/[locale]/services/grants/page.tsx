import { CheckIcon } from '@/public/assets';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

export default function page() {

    const grantsInformation = {
        "pageTitle": "Grants: Research, Writing, Training & Management",
        "image": "/images/grants.png",
        "pageSubtitle": "Rischer Consulting specializes in Proposal Writing, Grant Writing, and Grant & Compliance Management, ensuring your organization navigates these critical areas with expertise and precision.",
        "sections": [
            {
                "title": "Funding for Success",
                "content": [
                    "Unlock your funding potential with our expert proposal writing services. Whether you're seeking local, state, or federal support, our seasoned staff is here to craft compelling and award-winning proposals that authentically tell your story and inspire funders' support. We conduct a thorough assessment to ensure each proposal and budget encapsulates the identified need that funders assess as they determine which organizations align with their funding goals.",
                    "Specializing in grants for educational programming, workforce development, higher education, and technical proposals, Rischer Consulting is your go-to partner for crafting grant proposals, responses to bids, RFPS, and procurement announcements.",
                    "Our support continues beyond securing funds. Once you've received city, state, or federal funding, our Grant and Compliance Management Services kick in, ensuring seamless compliance with awarded funds. From handling required reporting to acting as a liaison during program audits, we're committed to making post-award processes stress-free."
                ],
                "featureDescription": "Our comprehensive grant services include:",
                "keyFeatures": [
                    {
                        "title": "Grant Writing Services",
                        "description": "Expert proposal development for all funding levels",
                        "subMenu": [
                            "Federal Grant Applications",
                            "State Grant Applications",
                            "Local Grant Applications",
                            "Foundation Proposals",
                            "Technical Proposals"
                        ]
                    },
                    {
                        "title": "Research & Planning",
                        "description": "Identify funding opportunities and develop strategic approaches"
                    },
                    {
                        "title": "Compliance Management",
                        "description": "Ensure adherence to all grant requirements and regulations"
                    },
                    {
                        "title": "Post-Award Support",
                        "description": "Assist with reporting, audits, and ongoing grant management"
                    },
                    {
                        "title": "Training & Development",
                        "description": "Build internal capacity for grant writing and management"
                    }
                ]
            }
        ]
    }

    const {
        pageTitle,
        pageSubtitle,
        image,
        sections
    } = grantsInformation;


    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "60px", lg: "115px" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
                gap={6}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    {pageTitle}
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    {pageSubtitle}
                </Text>
            </Flex>
            <Flex direction="column" width="100%" >
                <Box
                    width="100%"
                    maxHeight={{ base: "350px", lg: "520px" }}
                    height={{ base: "350px", lg: "520px" }}
                    bg="blue"
                    backgroundImage={image ? `url(${image})` : undefined}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius={{ base: "8px", md: "16px" }}
                >

                </Box>
            </Flex>
            <Flex direction="column" gap={{ base: 8, md: 10 }} mx={{ lg: "200px" }}>
                {sections.map(({ title, content, featureDescription, keyFeatures }, index) => (
                    <Flex direction="column" gap={{ base: 4, md: 6 }}>
                        <Text
                            as="h3"
                            fontSize={{ base: "24px", md: "48px" }}
                            fontWeight="500"
                            className="font-playfair"
                            color="#121212"
                        >
                            {title}
                        </Text>
                        <Flex direction="column" gap={{ base: 4, md: 6 }}>
                            {content.map((paragraph, index) => (
                                <Text key={index} fontSize={{ base: "20px", md: "24px" }} color="#667085" lineHeight={{ base: "24px", md: "32px" }}>{paragraph}</Text>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
