'use client';

import React from 'react';
import {
    Box,
    SimpleGrid,
    VStack,
    Heading,
    List,
    ListItem,
    useBreakpointValue,
    Text
} from '@chakra-ui/react';

const MissionVision = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const Content = () => {
        const sections = [
            {
                title: "Catalyst Mission",
                items: [
                    "To empower organizations...",
                    "To empower businesses...",
                    "To empower nonprofits...",
                    "To empower Entrepreneurs...",
                    "To empower YOU...",
                    "...through growth, connections, talent, opportunities and money!"
                ]
            },
            {
                title: "Our Vision",
                items: [
                    "To honor the Lord in all we do;",
                    "To grow and prosper individually and as a collective whole;",
                    "To work with integrity in all we do with an eye towards excellence;",
                    "To help our clients achieve their goals and turn their vision into reality, allowing them the freedom to do what really matters."
                ]
            },
            {
                title: "What sets us apart",
                items: [
                    "Our Exceptional People",
                    "Proven Return on investment",
                    "Results-Driven Approach",
                    "Collaborative Solutions Team",
                    "Client Relationship Management",
                    "Tailor-fit Project Management",
                    "Commitment to Providing Outstanding Service"
                ]
            }
        ];

        if (isMobile) {
            return (
                <VStack spacing={6} align="stretch" w="full">
                    {sections.map((section, idx) => (
                        <Box
                            key={idx}
                            bg="#FEF4EC"
                            p={6}
                            borderRadius="md"
                        >
                            <Text fontSize="24px"
                                mb={4}
                                color="#121212"
                                className='font-playfair'
                                fontWeight="500"
                            >
                                {section.title}
                            </Text>
                            <List spacing={2}>
                                {section.items.map((item, itemIdx) => (
                                    <ListItem key={itemIdx} color="#667085">
                                        {item}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                </VStack>
            );
        }

        return (
            <SimpleGrid
                paddingX={{ base: "10px", md: "60px", lg: "115px" }}
                py={8}
                columns={3}
                spacing={8}
                w="full"
                bg="#FEF4EC"
                borderRadius="lg"
            >
                {sections.map((section, idx) => (
                    <Box key={idx}>
                        <Text
                            fontSize="32px"
                            mb={4}
                            borderTop="2px solid"
                            borderColor="#F49953"
                            pt={4}
                            color="#121212"
                            className='font-playfair'
                        >
                            {section.title}
                        </Text>
                        <List spacing={2}>
                            {section.items.map((item, itemIdx) => (
                                <ListItem key={itemIdx} color="#667085">
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </SimpleGrid>
        );
    };

    return (
        <Box
            w="full"
        >
            <Content />
        </Box>
    );
};

export default MissionVision;