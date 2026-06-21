import { Box, Button, Flex, Text } from "@chakra-ui/react";
import AnimatedLogo from '@/components/UI/AnimatedLogo'

export default function Welcome() {
    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            gap={{ base: 10, md: 16 }}
            justify="space-between"
            mx="auto"
            align="center"
        >
            <Flex flex={{ lg: 2 }} direction="column" gap={{ base: "24px", md: "32px" }}>
                <Text
                    color="#121212"
                    fontWeight="500"
                    fontSize={{ base: "24px", md: "48px" }}
                    className='font-playfair'
                    maxWidth="640px"
                >
                    Welcome to Rischer Consulting
                </Text>
                <Text
                    paddingLeft="8px"
                    borderLeft="4px solid #F49953"
                    color="#667085"
                    fontWeight="500"
                    fontSize={{ base: "16px", md: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                    textAlign="start"
                >
                    Rischer Consulting is a federally-credentialed, certified M/WBE · EDWOSB · HUB grant-strategy and organizational capacity firm. Founded in 2015, we partner with social-impact organizations — in education, workforce development, international development, nonprofit, and community health — to secure funding, build capacity, and develop the leaders who carry the mission forward.

                    <br />
                    <br />
                    We have stewarded $30M+ in competitive grants across sectors, delivered 3× ROI for clients with us longer than a year, and trained 100K+ professionals. Our principal, Shaniqua Rischer, serves as a Federal Grant Peer Reviewer for the U.S. Departments of Education and Labor — meaning we evaluate applications by the same standard the government applies.

                    <br />
                    <br />
                    You run the mission. We build the systems that fund it.
                </Text>
                <Box>
                    <Button
                        bg="transparent"
                        border="1px solid #F49953"
                        paddingX={{ base: 4, md: 6 }}
                        paddingY={{ base: 2, md: 3 }}
                        color="#F49953"
                        rounded="4px"
                        fontWeight="700"
                        as="a"
                        href="/about"
                    >
                        Learn More
                    </Button>
                </Box>
            </Flex>
            <Flex maxWidth={{ base: "100%", md: "300px" }}>
                <AnimatedLogo
                    src="/images/rischer_logo.png"
                    alt="Rischer Consulting Logo"
                    priority
                    style={{ flexShrink: 0, flex: 1 }}
                />
            </Flex>
        </Flex>
    )
}
