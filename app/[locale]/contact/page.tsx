"use client"

import { Button, Flex, Text } from "@chakra-ui/react";

const portalLink = "https://portal.rischerconsulting.com/public/form/view/667917c95e7fc2003a36b979";

export default function ContactPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
            align={{ base: "start", xl: "center" }}
        >
            <Flex direction="column" gap={6} maxW="760px">
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Contact Us
                </Text>
                <Text
                    color="#667085"
                    fontSize={{ base: "18px", lg: "24px" }}
                    lineHeight={{ base: "26px", lg: "34px" }}
                >
                    We manage new inquiries through our secure client portal. Use the link below to share details about your organization, scope, and desired services. A member of the Rischer Consulting team will respond within 2 business days.
                </Text>
                <Button
                    as="a"
                    href={portalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    size="lg"
                    width={{ base: "100%", md: "fit-content" }}
                    _hover={{ bg: "#e48845" }}
                >
                    Open Client Portal Form
                </Button>
            </Flex>
        </Flex>
    );
}
