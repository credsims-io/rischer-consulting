import Team from "@/components/layout/Team";
import { Flex, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Text
                as="h2"
                fontSize={{ base: "32px", lg: "64px" }}
                color="#121212"
                fontWeight="500"
                className='font-playfair'
            >
                Our Team
            </Text>
            <Team />
        </Flex>
    )
}
