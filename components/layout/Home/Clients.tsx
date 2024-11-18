import { Flex, Text } from "@chakra-ui/react";
import ClientsGrid from "./ClientsGrid";

export default function Clients() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "115px" }}
            paddingBottom={{ base: 8, md: 16 }}
        >
            <Text
                color="#121212"
                fontSize={{ base: "24px", md: "48px" }}
                fontWeight="500"
                mb={8}
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
            >
                Rischer Consulting serves clients in different industries and communities on a global scale with clients throughout the United States and Africa.
                <br />
                Our commitment to ensuring each client gets the service and results they deserve is why we become a trusted partner with their business or organization.
            </Text>

            <Flex width="100%" mt={8}>
                <ClientsGrid />
            </Flex>


        </Flex>
    )
}
