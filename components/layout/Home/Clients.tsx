import { Flex, Text } from "@chakra-ui/react";
import ClientsGrid from "./ClientsGrid";

export default function Clients() {
    return (
        <Flex
            direction="column"
            width="100%"
            paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
            paddingBottom={{ base: 8, md: 16 }}
        >
            <Flex
                direction="column"
                alignItems={{ base: "start", xl: "center" }}
                justifyContent="center"
                height="100%"
            >
                <Text
                    color="#121212"
                    fontSize={{ base: "24px", md: "48px" }}
                    fontWeight="500"
                    mb={8}
                    className='font-playfair'
                >
                    Our Clients
                </Text>
                <Text
                    color="#667085"
                    textAlign="justify"
                    fontSize={{ base: "16px", md: "24px" }}
                    fontWeight="500"
                    lineHeight={{ base: "24px", md: "32px" }}
                    maxW="880px"
                    mb={8}
                >
                    Rischer Consulting serves clients in different industries and communities on a global scale with clients throughout the United States and Africa.
                    <br />
                    Our commitment to ensuring each client gets the service and results they deserve is why we become a trusted partner with their business or organization.
                </Text>
            </Flex>
            <ClientsGrid />
        </Flex >
    )
}
