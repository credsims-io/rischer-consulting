import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TeamMembers from '@/public/assets/team.json'
import Image from 'next/image'

export default function Team() {
    const formatBio = (bio: string) => {
        return bio
            .replace(/\\n/g, '\n')  // Convert \n string to actual line breaks
            .replace(/&apos;/g, "'") // Convert &apos; to regular apostrophe
    }

    return (
        <Flex
            direction="column"
            gap={{ base: 6, md: "10" }}
        >
            {TeamMembers.map((member, index) => (
                <Flex
                    key={index}
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 6, md: "10" }}
                    align="start"
                >
                    <Flex direction="column" gap={6}>
                        <Box
                            position="relative"
                            minH="310px"
                            minWidth="287px"
                            height="100%"
                            overflow="hidden"
                        >
                            <Image
                                src={`${member.image}`}
                                alt={member.name}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                        <Flex direction="column" gap={2}>
                            <Text fontSize={{ base: "20px", md: "32px" }} fontWeight="500" color="#121212">{member.name}</Text>
                            <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="400" color="#F49953">{member.role}</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap={1}>
                        <Text
                            fontSize={{ base: "18px", md: "30px" }}
                            fontWeight="700"
                            color="#121212"
                        >
                            {`Meet ${member.name.split(" ")[0]}`}
                        </Text>
                        <Text
                            fontSize={{ base: "14px", md: "18px" }}
                            fontWeight="500"
                            color="#667085"
                            lineHeight={{ base: "20px", md: "28px" }}
                            whiteSpace="pre-line"
                            textAlign="justify"
                        >
                            {formatBio(member.bio)}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}
