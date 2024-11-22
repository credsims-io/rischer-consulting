import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TeamMembers from '@/public/assets/team.json'
import Image from 'next/image'
import { Divider } from '@/public/assets'

export default function Team() {
    const formatBio = (bio: string) => {
        return bio
            .replace(/\\n/g, '\n')  // Convert \n string to actual line breaks
            .replace(/&apos;/g, "'") // Convert &apos; to regular apostrophe
    }

    return (
        <Flex
            direction="column"
        >
            {TeamMembers.map((member, index) => (
                <Flex
                    direction="column"
                >
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
                                <Text fontSize={{ base: "20px", md: "32px" }} fontWeight="500" color="#121212" className='font-playfair'>{member.name}</Text>
                                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="400" color="#F49953">{member.role}</Text>
                            </Flex>
                            {member.name === "Shaniqua Rischer" && (
                                <Flex align="center" gap={8}>
                                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500" color="#879037">Featured in:</Text>
                                    <Flex align="center" gap={3}>
                                        <Image src="/images/shoutout.png" alt="Featured in" width={64} height={64} />
                                        <Image src="/images/voyage.png" alt="Featured in" width={64} height={64} />
                                    </Flex>

                                </Flex>
                            )}
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
                    <Flex width="100%" py={8}>
                        <Divider />
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}
