import { Flex, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link";

const industries = [
    { label: "Education", path: "/industries/education" },
    { label: "Workforce Development", path: "/industries/workforce" },
    { label: "International Development", path: "/industries/international" },
    { label: "Nonprofit", path: "/industries/nonprofit" },
    { label: "Community Health Networks", path: "/industries/community-health", emerging: true },
];

export default function IndustriesStrip() {
    return (
        <Flex
            direction="column"
            gap={4}
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
        >
            <Text fontSize={{ base: "13px", md: "14px" }} color="#667085" textTransform="uppercase" letterSpacing="0.15em" fontWeight="600">
                Industries Served
            </Text>
            <Flex gap={3} wrap="wrap">
                {industries.map((industry) => (
                    <Box
                        key={industry.path}
                        as={NextLink}
                        href={industry.path}
                        px={4}
                        py={2}
                        border="1px solid"
                        borderColor={industry.emerging ? "#F49953" : "#D0D5DD"}
                        rounded="full"
                        fontSize={{ base: "13px", md: "14px" }}
                        fontWeight="500"
                        color={industry.emerging ? "#F49953" : "#475467"}
                        bg={industry.emerging ? "#FEF4EC" : "#FFFFFF"}
                        _hover={{ borderColor: "#F49953", color: "#F49953", bg: "#FEF4EC" }}
                        transition="all 0.15s"
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        {industry.label}
                        {industry.emerging && (
                            <Box as="span" fontSize="11px" fontWeight="600" ml={1}>
                                — emerging
                            </Box>
                        )}
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}
