'use client';

import { Box, Button, Grid, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const sectors = [
    { id: "all", label: "All Sectors" },
    { id: "education", label: "Education & Youth" },
    { id: "housing", label: "Housing" },
    { id: "food", label: "Food & Nutrition" },
    { id: "workforce", label: "Workforce" },
    { id: "operations", label: "Capacity Building" },
    { id: "arts", label: "Arts & Culture" },
    { id: "health", label: "Health & Wellness" },
];

const sectorSummary = [
    { sector: "education", label: "Education & Youth Development", amount: "$1,507,500", color: "#879037" },
    { sector: "housing", label: "Housing", amount: "$4,978,981", color: "#121212" },
    { sector: "food", label: "Food & Nutrition", amount: "$927,000", color: "#F49953" },
    { sector: "workforce", label: "Workforce Development", amount: "$988,685", color: "#879037" },
    { sector: "operations", label: "Operations & Capacity Building", amount: "$1,117,061", color: "#121212" },
    { sector: "arts", label: "Arts, Culture & Public Space", amount: "$390,166", color: "#F49953" },
    { sector: "health", label: "Health & Wellness", amount: "$372,127", color: "#879037" },
];

export default function GrantWinsFilter() {
    const [active, setActive] = useState("all");
    const filtered = active === "all" ? sectorSummary : sectorSummary.filter(s => s.sector === active);

    return (
        <Flex direction="column" gap={6}>
            <Flex gap={3} wrap="wrap">
                {sectors.map((s) => (
                    <Button
                        key={s.id}
                        size="sm"
                        onClick={() => setActive(s.id)}
                        bg={active === s.id ? "#121212" : "#FFFFFF"}
                        color={active === s.id ? "#FFFFFF" : "#475467"}
                        border="1px solid"
                        borderColor={active === s.id ? "#121212" : "#EAECF0"}
                        fontWeight="600"
                        rounded="20px"
                        _hover={{ borderColor: "#121212" }}
                    >
                        {s.label}
                    </Button>
                ))}
            </Flex>

            <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
                {filtered.map((item) => (
                    <Box
                        key={item.sector}
                        border="1px solid #EAECF0"
                        rounded="20px"
                        p={6}
                        bg="#FFFFFF"
                        _hover={{ borderColor: item.color, shadow: "sm" }}
                        transition="all 0.15s"
                    >
                        <Box
                            display="inline-block"
                            px={2}
                            py={1}
                            bg={item.color}
                            color="#FFFFFF"
                            fontSize="10px"
                            fontWeight="700"
                            rounded="4px"
                            letterSpacing="0.08em"
                            mb={3}
                        >
                            {item.label.toUpperCase()}
                        </Box>
                        <Text fontSize={{ base: "32px", md: "40px" }} fontWeight="700" color={item.color} className="font-playfair">
                            {item.amount}
                        </Text>
                        <Text fontSize="14px" color="#667085" mt={1}>
                            Competitive grants secured
                        </Text>
                    </Box>
                ))}
            </Grid>
        </Flex>
    );
}
