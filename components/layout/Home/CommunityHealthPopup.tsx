'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
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
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function CommunityHealthPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            onOpen();
        }, 400);
        return () => window.clearTimeout(timer);
    }, [onOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
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
                            Emerging Practice · Community Health Networks
                        </Text>
                        <Text as="h2" fontSize={{ base: "24px", md: "32px" }} fontWeight="600" className="font-playfair">
                            Rischer Consulting is Expanding into Community Health.
                        </Text>
                        <Text color="#D0D5DD" fontSize={{ base: "sm", md: "md" }}>
                            We're bringing federal grant rigor, equity-centered strategy, and 10+ years of multi-sector experience to community health networks — a sector navigating the most volatile funding environment in 30 years.
                        </Text>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton color="#FFFFFF" _hover={{ bg: "rgba(255,255,255,0.08)" }} />
                <ModalBody px={{ base: 6, md: 8 }} pb={4}>
                    <Box
                        border="1px solid rgba(255,255,255,0.16)"
                        rounded="12px"
                        p={4}
                        bg="rgba(255,255,255,0.04)"
                    >
                        <Text fontWeight="600" mb={2}>Why now?</Text>
                        <Stack spacing={2} color="#EAECF0" fontSize="sm">
                            <Text>· CHCF funding cliff arrives December 2026</Text>
                            <Text>· H.R. 1 Medicaid provisions create new compliance demands</Text>
                            <Text>· $50B RHTP creates grant opportunity for prepared organizations</Text>
                            <Text>· Sector margin is at −2.1% — capacity building is no longer optional</Text>
                        </Stack>
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
                        as="a"
                        href={DUBSADO_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        bg="#F49953"
                        color="#121212"
                        fontWeight="700"
                        size="lg"
                        _hover={{ bg: "#f68b3e" }}
                        width="100%"
                    >
                        Schedule a Capabilities Conversation
                    </Button>
                    <Button
                        as={Link}
                        href="/industries/community-health"
                        onClick={onClose}
                        variant="outline"
                        borderColor="rgba(255,255,255,0.3)"
                        color="#FFFFFF"
                        fontWeight="600"
                        _hover={{ bg: "rgba(255,255,255,0.08)" }}
                        width="100%"
                    >
                        Learn About Our CHN Practice
                    </Button>
                    <Button
                        variant="ghost"
                        color="#EAECF0"
                        onClick={onClose}
                        _hover={{ bg: "rgba(255,255,255,0.08)" }}
                    >
                        Maybe later
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
