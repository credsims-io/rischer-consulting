import { Metadata } from "next";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";
import GrantWinsFilter from "@/components/layout/GrantWinsFilter";

export const metadata: Metadata = {
    title: "Grant Wins | Rischer Consulting",
    description: "$30M+ in competitive grants stewarded since 2015 across education, housing, workforce, food security, capacity building, arts, and health.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function GrantWinsPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 10, md: "80px" }}
            mb={6}
        >
            {/* Hero */}
            <Flex direction="column" gap={4} maxW="800px">
                <Box
                    display="inline-block"
                    px={3}
                    py={1}
                    bg="#879037"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    SINCE 2015
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    $30M+ stewarded in competitive grants
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7" maxW="640px">
                    Across education, housing, workforce, food security, capacity building, arts, and health — a track record built on federal rigor, equity-centered strategy, and 10+ years in competitive grant markets.
                </Text>
            </Flex>

            {/* Filterable Sector Grid */}
            <GrantWinsFilter />

            {/* Grand Total callout */}
            <Box bg="#121212" rounded="24px" p={{ base: 8, md: 12 }} textAlign="center">
                <Text fontSize="13px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={3}>
                    Total Impact — Featured Sector Summary
                </Text>
                <Text fontSize={{ base: "48px", md: "72px" }} fontWeight="700" color="#FFFFFF" className="font-playfair" lineHeight="1">
                    $10,281,520
                </Text>
                <Text color="#D0D5DD" fontSize={{ base: "15px", md: "18px" }} mt={3} maxW="560px" mx="auto" lineHeight="1.6">
                    Documented across seven sectors. Full $30M+ history spans 2015–present. Individual grant cards are being compiled — check back soon.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#121212"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    mt={6}
                    _hover={{ opacity: 0.9 }}
                >
                    Get Your Funding Readiness Assessment
                </Button>
            </Box>

            {/* Sector data note */}
            <Box border="1px solid #EAECF0" rounded="16px" p={6} bg="#F9FAFB">
                <Text fontWeight="700" color="#121212" mb={2}>About this data</Text>
                <Text color="#667085" fontSize="15px" lineHeight="1.65">
                    The sector summary above represents a curated sample of Rischer Consulting&apos;s funded grant portfolio. Total grants stewarded since 2015 exceed $30M across all clients and sectors. Individual grant win cards — including funder name, award amount, client type, and outcome — are in final review and will be published here shortly.
                </Text>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}
