import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react";

const tiles = [
    { value: "$29M+", label: "Grants stewarded" },
    { value: "3×", label: "ROI for clients 1+ year" },
    { value: "100K+", label: "Professionals trained" },
    { value: "$19M+", label: "Annual revenue ops managed" },
    { value: "25+", label: "Years Fortune 500 brand strategy" },
    { value: "$2M+", label: "Event budgets managed" },
];

export default function ProofBar() {
    return (
        <Flex
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
        >
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} width="100%" borderRadius="20px" overflow="hidden" border="1px solid #EAECF0">
                {tiles.map((tile, i) => (
                    <Box
                        key={tile.label}
                        p={{ base: 4, md: 6 }}
                        bg={i % 2 === 0 ? "#FFFFFF" : "#F9FAFB"}
                        borderRight={{ base: i % 2 === 0 ? "1px solid #EAECF0" : "none", md: i < 5 ? "1px solid #EAECF0" : "none" }}
                        borderBottom={{ base: i < tiles.length - 2 ? "1px solid #EAECF0" : "none", lg: "none" }}
                    >
                        <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="700" color="#121212" className="font-playfair">
                            {tile.value}
                        </Text>
                        <Text fontSize={{ base: "12px", md: "13px" }} color="#667085" mt={1}>
                            {tile.label}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    );
}
