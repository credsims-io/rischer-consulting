import { Metadata } from "next";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "Insights | Rischer Consulting",
    description: "Grant strategy insights, funding landscape analysis, and capacity-building resources from the Rischer Consulting team.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function InsightsPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "60px" }}
            mb={6}
        >
            <Flex direction="column" gap={4} maxW="760px">
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Insights
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Grant strategy perspectives, funding landscape analysis, and capacity-building resources from the Rischer Consulting team.
                </Text>
            </Flex>

            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC" maxW="680px">
                <Text fontSize="13px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>
                    Coming Soon
                </Text>
                <Text fontSize={{ base: "22px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3}>
                    Articles and resources are being prepared
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.65" mb={6}>
                    We&apos;re publishing posts from our newsletter archive on grant strategy, sector funding trends, and organizational capacity building. Check back soon — or subscribe below to be notified when new content is available.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Talk to Us in the Meantime
                </Button>
            </Box>
        </Flex>
    );
}
