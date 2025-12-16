'use client';

import Link from "next/link";
import { useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";

export default function WorldCupPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            onOpen();
        }, 400);
        return () => window.clearTimeout(timer);
    }, [onOpen]);

    const handleDismiss = () => {
        onClose();
    };

    const ctaButtons = [
        { label: "Learn More", href: "/world-cup-2026/landing" },
        // { label: "Campaign Copy Toolkit", href: "/world-cup-2026/copy" },
        { label: "Business FAQ", href: "/world-cup-2026/faq" },
    ];

    return (
        <Modal isOpen={isOpen} onClose={handleDismiss} isCentered size="xl">
            <ModalOverlay bg="rgba(0,0,0,0.45)" backdropFilter="blur(2px)" />
            <ModalContent
                bg="#121212"
                color="#FFFFFF"
                rounded="24px"
                shadow="2xl"
                overflow="hidden"
            >
                <ModalHeader p={{ base: 6, md: 8 }}>
                    <Flex direction="column" gap={2}>
                        <Text fontSize={{ base: "sm", md: "md" }} color="#F49953" textTransform="uppercase" letterSpacing="0.2em">
                            FIFA World Cup 2026 · Dallas / Fort Worth
                        </Text>
                        <Text as="h2" fontSize={{ base: "28px", md: "36px" }} fontWeight="600" className="font-playfair">
                            Business Readiness Hub
                        </Text>
                        <Text color="#D0D5DD" fontSize={{ base: "sm", md: "md" }}>
                            $500M-$700M+ in impact and 650,000+ international visitors are headed to North Texas. Dive into the landing overview, copy deck, and FAQ to see how prepared businesses capture 3-5x more revenue.
                        </Text>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton
                    onClick={handleDismiss}
                    color="#FFFFFF"
                    _hover={{ bg: "rgba(255,255,255,0.08)" }}
                />
                <ModalBody px={{ base: 6, md: 8 }} pb={4}>
                    <Box
                        border="1px solid rgba(255,255,255,0.16)"
                        rounded="12px"
                        p={4}
                        bg="rgba(255,255,255,0.04)"
                    >
                        <Text fontWeight="600" mb={2}>
                            The Window Is Closing
                        </Text>
                        <Text color="#EAECF0" fontSize="sm">
                            World Cup starts June 11, 2026. Programs launch January 15 and enrollment ends February 28. Every week of readiness counts.
                        </Text>
                    </Box>
                </ModalBody>
                <ModalFooter
                    flexDirection="column"
                    alignItems="stretch"
                    gap={3}
                    px={{ base: 6, md: 8 }}
                    pb={{ base: 6, md: 8 }}
                >
                    <Button
                        as={Link}
                        href="https://portal.rischerconsulting.com/public/form/view/667917c95e7fc2003a36b979"
                        onClick={handleDismiss}
                        bg="#F49953"
                        color="#121212"
                        fontWeight="700"
                        size="lg"
                        _hover={{ bg: "#f68b3e" }}
                        width="100%"
                    >
                        Schedule Free Discovery Call
                    </Button>
                    {ctaButtons.map((cta) => (
                        <Button
                            key={cta.href}
                            as={Link}
                            href={cta.href}
                            onClick={handleDismiss}
                            variant="outline"
                            borderColor="rgba(255,255,255,0.3)"
                            color="#FFFFFF"
                            fontWeight="600"
                            size="md"
                            _hover={{ bg: "rgba(255,255,255,0.08)" }}
                            width="100%"
                        >
                            {cta.label}
                        </Button>
                    ))}
                    <Button
                        variant="ghost"
                        color="#EAECF0"
                        onClick={handleDismiss}
                        _hover={{ bg: "rgba(255,255,255,0.08)" }}
                    >
                        Maybe later
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
