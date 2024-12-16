import ClientsGrid from "@/components/layout/Home/ClientsGrid";
import { Box, Flex, Text } from "@chakra-ui/react";
import ClientReviews from "@/public/assets/reviews.json"
import Image from "next/image";
import { ChamferedGrayBackground, ChamferedPinkBackground } from "@/public/assets";

export default function page() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
                align={{ "2xl": "center" }}
                textAlign={{ "2xl": "center" }}
                gap={6}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Commitment to Clients
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Helping Clients Achieve Their Goals and Turn Their Vision Into Reality.
                </Text>
            </Flex>
            <Flex
                direction="column"
                align={{ "2xl": "center" }}
                textAlign={{ "2xl": "center" }}
            >
                <Text
                    as="h3"
                    fontSize={{ base: "24", lg: "48px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Our Clients
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Rischer Consulting serves clients in different industries and communities on a global scale with clients throughout the United States and Africa.
                    Our commitment to ensuring each client gets the service and results they deserve is why we become a trusted partner with their business or organization.
                </Text>
            </Flex>

            <ClientsGrid />

            <Text
                as="h3"
                fontSize={{ base: "24", lg: "48px" }}
                color="#121212"
                fontWeight="500"
                className='font-playfair'
            >
                Client Review
            </Text>

            <Flex
                direction="column"
            >
                {ClientReviews.map((review, index) => (
                    <Flex
                        key={index}
                        mb={{
                            base: 4,
                            lg: 4,
                            xl: index % 2 === 0 ? 1 : 8
                        }}
                        position="relative"
                        width="100%"
                        direction="column"
                        bg={{ base: "#FEF4EC", lg: "transparent" }}
                        rounded={{ base: "8px", xl: "0px" }}
                    >
                        <Flex position="absolute" display={{ base: "none", lg: "flex" }} top="0" width="100%" left="0" height="100%">
                            {index % 2 === 0 ? <ChamferedPinkBackground /> : <ChamferedGrayBackground />}
                        </Flex>
                        <Flex
                            zIndex={3}
                            position="relative"
                            direction="column"
                            py={{ base: 6, md: 10 }}
                            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                        >
                            <Flex
                                direction={{ base: "column", xl: "row" }}
                                gap={{ base: 4, md: 6 }}
                                h="100%"
                                align={{ base: "start" }}
                                mt={{ xl: index % 2 !== 0 ? "100px" : "0" }}
                            >
                                <Box
                                    position="relative"
                                    minHeight="310px"
                                    minWidth="287px"
                                    height="100%"
                                    overflow="hidden"
                                >
                                    <Image
                                        src={`/images/${review.image}`}
                                        alt={review.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>

                                {/* Review Content */}
                                <Flex
                                    direction="column"
                                    align="start"
                                    gap={4}
                                    minH="310px"
                                    flexGrow={1}
                                    justify="space-between"
                                >
                                    <Flex
                                        fontSize={{ base: "16px", md: "18px" }}
                                        textAlign="justify"
                                        color="#101828"
                                        direction="column"
                                    >
                                        <Text className="text-[#F49953] text-[40px] font-bold">"</Text>
                                        {review.text}
                                        <br />
                                        <Text className="text-[#F49953] text-[40px] font-bold text-end">"</Text>
                                    </Flex>
                                    <Box textAlign="start">
                                        <Text
                                            fontSize={{ base: "14px", md: "16px" }}
                                            fontWeight="600"
                                            color="#121212"
                                        >
                                            - {review.name}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "14px", md: "16px" }}
                                            color="#667085"
                                            mt={1}
                                            maxW="300px"
                                        >
                                            {review.title}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
