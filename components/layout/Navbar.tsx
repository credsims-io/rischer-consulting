'use client'

import { ChevronDownIcon, FacebookIcon, HamburgerIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/public/assets";
import { Box, Flex, IconButton, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from "@chakra-ui/react";
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedNavLogo from "../UI/AnimatedNavLogo";

interface NavItem {
    name: string;
    path: string;
    subItems?: {
        name: string;
        path: string;
    }[];
}

const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Grants', path: '/services/grants' },
    { name: 'Team Training', path: '/services/team-training' },
    { name: 'Strategic Planning', path: '/services/strategic-planning' },
    // {
    //     name: 'Services',
    //     path: '/services',
    //     subItems: [
    //         {
    //             name: "Grants: Research, Writing, Training & Management",
    //             path: "/services/grants"
    //         },
    //         {
    //             name: "Team Training and Development",
    //             path: "/services/team-training"
    //         },
    //         {
    //             name: "Coaching & Leadership Development",
    //             path: "/services/coaching-leadership"
    //         },
    //         {
    //             name: "Strategic Planning & Instructional Design",
    //             path: "/services/strategic-planning"
    //         }
    //     ]
    // },
    // { name: 'Clients', path: '/clients' },
    { name: 'Contracts & Capabilities', path: '/capabilities' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Courses', path: '/courses' },
    // { name: 'Team', path: '/team' },
    // { name: 'Reviews', path: '/reviews' },
]

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { isOpen: isMobileOpen, onOpen: onMobileOpen, onClose: onMobileClose } = useDisclosure();
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname?.startsWith(path);
    };

    return (
        <Flex width="100%" direction="column"
            position="sticky"
            top="0"
            zIndex={999}
        >
            <Flex
                align="center"
                justify="space-between"
                px={{ base: 6, md: "80px", lg: "115px", xl: "10%", "2xl": "15%" }}
                py={{ base: 4, md: 8 }}
                bg="white"
                boxShadow="sm"
                zIndex={1000}
                gap={4}
            >
                <Box as="a" href="/" maxW={{ base: '200px', xl: '300px', "2xl": "350px" }}>
                    <Image
                        src="/images/nav_logo.png"
                        alt="Rischer Consulting"
                        width={300}
                        height={60}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>

                {/* Desktop Navitems */}
                <Flex
                    align="center"
                    display={{ base: "none", lg: "flex" }}
                    gap={{ base: 1, lg: 2, xl: 2, "2xl": 3 }}
                    fontSize={{ base: "12px", lg: "10px", xl: "12px", "2xl": "13px", }}
                >
                    {navItems.map((item) => (
                        <NextLink
                            key={item.name}
                            href={item.path}
                            passHref
                            legacyBehavior
                        >
                            <Text
                                as="a"
                                cursor="pointer"
                                color={isActive(item.path) ? "#F49953" : "#667085"}
                                _hover={{ color: "#F49953" }}
                                fontWeight={isActive(item.path) ? "bold" : "normal"}
                            >
                                {item.name}
                            </Text>
                        </NextLink>
                    ))}
                </Flex>

                {/* Mobile Menu Button */}
                <IconButton
                    aria-label="Open menu"
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    display={{ base: "flex", lg: "none" }}
                    onClick={onMobileOpen}
                />

                {/* Mobile Navbar */}
                <Drawer
                    isOpen={isMobileOpen}
                    placement="right"
                    onClose={onMobileClose}
                    size="xs"
                >
                    <DrawerOverlay />
                    <DrawerContent
                        minW="230px"
                        maxW="400px"
                        px={6}
                        py={4}
                    >
                        <DrawerCloseButton color="#667085" mt={4} />
                        <DrawerHeader borderBottomWidth="1px" px={4} paddingLeft={0}>
                            <Flex justify="start" align="center" width="100%" height="24px" paddingLeft={0} ml={-4}>
                                <AnimatedNavLogo src="/images/nav_logo.png" alt="Rischer Consulting" priority />
                            </Flex>
                        </DrawerHeader>

                        <DrawerBody px={4} py={6}>
                            <VStack align="stretch" spacing={6}>
                                {navItems.map((item) => {
                                    if (item?.subItems) {
                                        return (
                                            <Box key={item.name}>
                                                <Flex
                                                    cursor="pointer"
                                                    align="center"
                                                    justify="space-between"
                                                    color={isActive(item.path) ? "#F49953" : "#667085"}
                                                    fontWeight={isActive(item.path) ? "bold" : "normal"}
                                                    onClick={() => setMobileSubMenuOpen(
                                                        mobileSubMenuOpen === item.name ? null : item.name
                                                    )}
                                                    _hover={{ color: "#F49953" }}
                                                >
                                                    <Text>{item.name}</Text>

                                                </Flex>
                                                {mobileSubMenuOpen === item.name && (
                                                    <VStack
                                                        align="stretch"
                                                        mt={4}
                                                        ml={4}
                                                        spacing={4}
                                                    >
                                                        {item?.subItems.map((subItem) => (
                                                            <NextLink
                                                                key={subItem.path}
                                                                href={subItem.path}
                                                                onClick={onMobileClose}
                                                            >
                                                                <Text
                                                                    color={isActive(subItem.path) ? "#F49953" : "#667085"}
                                                                    _hover={{ color: "#F49953" }}
                                                                >
                                                                    {subItem.name}
                                                                </Text>
                                                            </NextLink>
                                                        ))}
                                                    </VStack>
                                                )}
                                            </Box>
                                        );
                                    }

                                    return (
                                        <NextLink
                                            key={item.name}
                                            href={item.path}
                                            onClick={onMobileClose}
                                        >
                                            <Text
                                                color={isActive(item.path) ? "#F49953" : "#667085"}
                                                fontWeight={isActive(item.path) ? "bold" : "normal"}
                                                _hover={{ color: "#F49953" }}
                                            >
                                                {item.name}
                                            </Text>
                                        </NextLink>
                                    );
                                })}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            {/* Orange Bar under the navbar */}
            <Flex
                bg="#F49953"
                color="#FFFFFF"
                direction={{ base: "row", md: "row" }}
                px={{ base: 6, md: "80px", lg: "115px", xl: "10%", "2xl": "15%" }}
                py={4}
                justify="space-between"
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    gap={{ base: 2, md: 8, lg: "128px" }}
                >
                    <Link href="tel:2148105166" display="flex" alignItems="center" gap={2}>
                        <PhoneIcon />
                        <Text>
                            214 810 5166
                        </Text>
                    </Link>
                    <Link href="mailto:info@rischerconsulting.com" display="flex" alignItems="center" gap={2}>
                        <MailIcon />
                        <Text>
                            info@rischerconsulting.com
                        </Text>
                    </Link>
                </Flex>

                <Box display={{ base: "grid", md: "flex" }} gridTemplateColumns="1fr 1fr" columnGap={8} rowGap={4}>
                    <Link href="https://www.instagram.com/rischer_consulting/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/company/rischer-consulting" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://www.facebook.com/rischerconsulting" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </Link>
                </Box>
            </Flex>
        </Flex>
    )
}
