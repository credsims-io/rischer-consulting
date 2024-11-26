'use client';

import { DownloadIcon } from "@/public/assets";
import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: 2, md: 4 }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
                alignItems={{ base: "start", xl: "center" }}
                gap={4}
                paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Capabilties Statement
                </Text>
                <Flex>
                    <Button
                        bg="transparent"
                        rightIcon={<DownloadIcon />}
                        color="#F49953"
                        fontWeight="600"
                        padding={0}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/assets/capabilities_statement.pdf';
                            link.download = 'capabilities_statement.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download Capabilities Statement
                    </Button>
                </Flex>
            </Flex>
            <Flex align="center" justify="center" width="100%">
                <Flex align="center" justify="center" minWidth={{ "2xl": "1330px" }}>
                    <Image src="/images/capabilities_statement.png" alt="capabilities" style={{ minWidth: "100%", maxHeight: "100%" }} width={1000} height={1000} />
                </Flex>
            </Flex>
        </Flex>
    )
}
