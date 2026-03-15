'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
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
    useToast
} from "@chakra-ui/react";

export default function WorldCupPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            onOpen();
        }, 400);
        return () => window.clearTimeout(timer);
    }, [onOpen]);

    const handleDismiss = () => {
        onClose();
    };

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name || !email) return;
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
            if (response.ok) {
                setName("");
                setEmail("");
                toast({
                    title: "You're on the list",
                    description: "We'll send key World Cup readiness updates to your inbox.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                throw new Error("Subscription failed");
            }
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again or contact info@rischerconsulting.com.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const ctaButtons = [
        { label: "Readiness Brief", href: "/world-cup-2026/landing" },
        { label: "Campaign Copy Toolkit", href: "/world-cup-2026/copy" },
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
                            $1B+ in projected impact and 3M–4M+ international visitors are headed to North Texas. Programs launch January 15 and enrollment closes February 28—businesses that prepare now routinely capture 3-5x more revenue.
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
                        <Box
                            as="form"
                            mt={4}
                            onSubmit={handleSignup}
                        >
                            <Stack spacing={3}>
                                <Input
                                    placeholder="Full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    bg="rgba(255,255,255,0.08)"
                                    color="#FFFFFF"
                                    _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    bg="rgba(255,255,255,0.08)"
                                    color="#FFFFFF"
                                    _placeholder={{ color: "rgba(255,255,255,0.7)" }}
                                    required
                                />
                                <Button
                                    type="submit"
                                    bg="#FFFFFF"
                                    color="#121212"
                                    fontWeight="700"
                                    _hover={{ bg: "#EAECF0" }}
                                    isLoading={isSubmitting}
                                >
                                    Get World Cup Updates
                                </Button>
                            </Stack>
                        </Box>
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
                        href="/world-cup-2026/discovery"
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
