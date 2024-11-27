import { CheckIcon } from '@/public/assets';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Page() {
    const pageInformation = {
        "pageTitle": "Strategic Planning & Instructional Design",
        "image": "/images/planning.png",
        "sections": [
            {
                "title": "Strategic Planning",
                "content": [
                    "Rischer Consulting helps clients chart the course for success through our Strategic Planning Services. These services help clients navigate uncertainty and achieve their long-term goals with a clear roadmap.",
                    "In today's dynamic business environment, having a clear vision and a well-defined strategy is more critical than ever. Our strategic planning services help organizations of all sizes: We work with you to define your mission, core values, and long-term goals. Through market research and competitor analysis, we identify opportunities and threats. We also collaboratively craft actionable plans that align with your long-term vision and resources. Rischer Consulting also helps to break down silos across departments by facilitating communication and collaboration across departments for a unified approach. Rischer Consulting assists with establishing key performance indicators (KPIs), monitoring progress, and making adjustments as needed."
                ],
            },
            {
                "title": "Instructional Design",
                "content": [
                    "Our instructional design services are committed to creating transformative learning experiences that amplify the voices and potential of women, girls, and BIPOC individuals across diverse industries. We design innovative, culturally responsive educational and training programs that address systemic barriers and actively dismantle them by centering the unique perspectives, strengths, and lived experiences of historically marginalized communities. Through intentional content design, inclusive pedagogical approaches, and intersectional frameworks, we craft curricula that empower learners to develop critical skills, challenge traditional narratives, and emerge as confident, strategic leaders in their chosen fields. Our approach goes beyond representation—we create dynamic learning environments that validate, celebrate, and strategically equip individuals to excel, transform industries, and drive meaningful social change from within."
                ],
                "sectionImage": "/images/planning-1.png"
            }
        ]
    }

    const {
        pageTitle,
        image,
        sections
    } = pageInformation;

    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
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
                />
            </Flex>
            <Flex direction="column" gap={{ base: 8, md: 10 }} mx={{ lg: "200px" }}>
                {sections.map(({ title, content, sectionImage }, index) => (
                    <Flex key={index} direction="column" gap={{ base: 4, md: 6 }}>
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
                                <Text
                                    key={index}
                                    fontSize={{ base: "20px", md: "24px" }}
                                    color="#667085"
                                    lineHeight={{ base: "24px", md: "32px" }}
                                >
                                    {paragraph}
                                </Text>
                            ))}
                        </Flex>
                        {sectionImage &&
                            <Box
                                width="100%"
                                maxHeight={{ base: "200px", lg: "460px" }}
                                height={{ base: "200px", lg: "460px" }}
                                bg="blue"
                                backgroundImage={sectionImage ? `url(${sectionImage})` : undefined}
                                backgroundSize="cover"
                                backgroundPosition="center"
                                borderRadius={{ base: "8px", md: "16px" }}
                            />
                        }
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}