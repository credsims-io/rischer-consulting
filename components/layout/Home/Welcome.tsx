import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Welcome() {
    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
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
                    At Rischer Consulting, we craft customized solutions tailored to each
                    organization's needs. Our dedication goes beyond mere consultation; we
                    believe in empowering organizations to reach their goals through
                    Organizational Development, Coaching, and Consulting. Our transformative
                    services include Grant Writing and Compliance/Management, Organizational
                    Management and Strategic Planning Services, Team Training and
                    Development, and Executive and Leadership Coaching and Development.
                    <br />
                    <br />
                    Join us on this personalized expedition towards success, where your
                    goals become our shared triumphs.
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
            <Image
                src="/images/rischer_logo.png"
                alt="Rischer Consulting Logo"
                width={500}
                height={500}
                style={{ flexShrink: 0, flex: 1 }}
            />
        </Flex>
    )
}
