import { CheckIcon } from '@/public/assets';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

export default function page() {

    const coachingInformation = {
        "pageTitle": "Coaching & Leadership Development",
        "image": "/images/coaching.png",
        "pageSubtitle": "Rischer Consulting provides highly effective coaching and leadership development services.",
        "sections": [
            {
                "title": "Executive Coaching",
                "content": [
                    "At Rischer Consulting, our coaching services begin with a comprehensive needs-assessment for individuals and the organization. This ensures that our approach is tailored to address specific goals and challenges, ultimately leading to success at both levels. Our coaching philosophy is grounded in evidence-based positive psychology, a deliberate, results-oriented methodology characterized by deep respect, honesty, and action steps. Our commitment to providing deep care and inspiration sets us apart, guiding clients toward their desired outcomes with passion and empathy."
                ],
                "featureDescription": "Our coaching strategies are founded on the latest research in the following areas:",
                "sectionImage": "/images/coaching-1.png",
                "keyFeatures": [
                    {
                        "title": "Research Areas",
                        "description": "",
                        "subMenu": [
                            "Human behavior",
                            "Adult learning",
                            "Social trust impact",
                            "Neuroscience",
                            "Organizational dynamics"
                        ]
                    }
                ]
            },
            {
                "title": "Solo Entrepreneur and Entrepreneur Coach",
                "content": [
                    "We work specifically with individuals in business for themselves in one-employee businesses, helping them clarify their purpose and vision, increase efficiency and productivity, and provide a sounding board in an often-isolated work environment."
                ],
            },
            {
                "title": "Organizational Coach",
                "content": [
                    "Teamwork makes the dream work! Sometimes, the team needs bolstering to improve the health of the overall organization. Rischer Consulting focuses on strengthening employees psychological capital to improve the overall organization.",
                    "This strategy allows employees to maximize their coaching services for emerging and advanced leaders, helping them develop a personal foundation and decision-making skills to excel in leadership positions"
                ],
                "sectionImage": "/images/coaching-2.png"
            }
        ]
    }
    const {
        pageTitle,
        pageSubtitle,
        image,
        sections
    } = coachingInformation;


    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
                align={{ "2xl": "center" }}
                textAlign={{ "2xl": "center" }}
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

                    backgroundImage={image ? `url(${image})` : undefined}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius={{ base: "8px", md: "16px" }}
                >

                </Box>
            </Flex>
            <Flex direction="column" gap={{ base: 8, md: 10 }} mx={{ lg: "200px" }}>
                {sections.map(({ title, content, featureDescription, sectionImage, keyFeatures }, index) => (
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
                                <Text key={index} fontSize={{ base: "16px", md: "24px" }} color="#667085" lineHeight={{ base: "24px", md: "32px" }}>{paragraph}</Text>
                            ))}
                        </Flex>
                        {sectionImage &&
                            <Box
                                width="100%"
                                maxHeight={{ base: "200px", lg: "460px" }}
                                height={{ base: "200px", lg: "460px" }}

                                backgroundImage={image ? `url(${sectionImage})` : undefined}
                                backgroundSize="cover"
                                backgroundPosition="center"
                                borderRadius={{ base: "8px", md: "16px" }}
                            >

                            </Box>
                        }
                        {featureDescription && <Text fontSize="20px" color="#667085" lineHeight={{ base: "24px", md: "32px" }} fontWeight="500">{featureDescription}</Text>}
                        {keyFeatures && keyFeatures.map(({ title, description, subMenu }, index) => (
                            <>
                                <Flex key={index} direction="column" gap={{ base: 2, md: 4 }}>
                                    <Flex align="start" gap={{ base: 2, md: 3 }}>
                                        <CheckIcon />
                                        <Flex align="center" gap={{ base: 2, md: 3 }}>
                                            <Text fontSize="20px" color="#667085" lineHeight={{ base: "24px", md: "32px" }} fontWeight="500">{title} :  {description}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                {subMenu && subMenu.map((item, index) => (
                                    <Flex key={index} align="center" px={{ md: "80px" }} gap={3}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <rect width="28" height="28" rx="14" fill="#F5F7E9" />
                                        </svg>
                                        <Text fontSize="20px" color="#667085" lineHeight={{ base: "24px", md: "32px" }} fontWeight="500">{item}</Text>
                                    </Flex>
                                ))}
                            </>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
