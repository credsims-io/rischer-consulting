import { QuoteIcon } from "@/public/assets";
import { Flex, Text } from "@chakra-ui/react";

export default function Quote() {
    return (
        <Flex
            align={{ base: "start", md: "center" }}
            paddingX={{ base: "10px", md: "60px", lg: "115px" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 4, md: "120px" }}
            justify={{ base: "start", md: "center" }}
        >
            <QuoteIcon />
            <Text
                color="#121212"
                fontSize={{ base: "40px", md: "64px" }}
                letterSpacing={{ base: "3.2px", md: "5.12px" }}
                fontWeight="800"
                maxW="800px"
            >
                "If this is our vision, imagine what we can do for yours."
            </Text>
        </Flex>
    )
}
