'use client'

import { ChevronDownIcon, FacebookIcon, HamburgerIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/public/assets";
import { Box, Flex, IconButton, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useDisclosure } from "@chakra-ui/react";
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    {
        name: 'Services',
        path: '/services',
        subItems: [
            { name: 'Consulting', path: '/services/consulting' },
            { name: 'Training', path: '/services/training' },
            { name: 'Strategy', path: '/services/strategy' },
        ]
    },
    { name: 'Courses', path: '/courses' },
    { name: 'Clients', path: '/clients' },
    { name: 'Team', path: '/team' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { isOpen: isMobileOpen, onOpen: onMobileOpen, onClose: onMobileClose } = useDisclosure();
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
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
                px={{ base: 4, lg: 32 }}
                py={{ base: 4, md: 8 }}
                bg="white"
                boxShadow="sm"
                zIndex={1000}
            >
                <Box w={"200px"}>
                    <Image
                        src="/images/nav_logo.png"
                        alt="Rischer Consulting"
                        width={200}
                        height={200}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Box>

                {/* Desktop Navitems */}
                <Flex align="center" display={{ base: "none", lg: "flex" }} gap={{ base: 1, lg: 2, xl: 4 }} fontSize={{ base: "12px", lg: "14px", xl: "16px" }}>
                    {NAV_ITEMS.map((item) => {
                        if (item.subItems) {
                            return (
                                <Menu
                                    key={item.name}
                                    isOpen={isOpen}
                                    onOpen={() => setIsOpen(true)}
                                    onClose={() => setIsOpen(false)}
                                    isLazy
                                >
                                    <Box
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                    >
                                        <MenuButton
                                            as={Text}
                                            cursor="pointer"
                                            fontWeight={isActive(item.path) ? "bold" : "normal"}
                                            color={isActive(item.path) ? "#F49953" : "#667085"}
                                            _hover={{ color: "#F49953" }}
                                            display="flex"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            {item.name}
                                            <Box
                                                as="span"
                                                mt="-3px"
                                                display="inline-block"
                                                transform={mobileSubMenuOpen === item.name ? 'rotate(180deg)' : 'rotate(0deg)'}
                                                transition="transform 0.2s"
                                            >
                                                <ChevronDownIcon />
                                            </Box>
                                        </MenuButton>
                                        <MenuList
                                            onMouseEnter={() => setIsOpen(true)}
                                            onMouseLeave={() => setIsOpen(false)}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <MenuItem
                                                    key={subItem.path}
                                                    as={NextLink}
                                                    href={subItem.path}
                                                    color={isActive(subItem.path) ? "#F49953" : "#667085"}
                                                    _hover={{ color: "#F49953", bg: "gray.50" }}
                                                >
                                                    {subItem.name}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </Box>
                                </Menu>
                            );
                        }

                        return (
                            <NextLink key={item.name} href={item.path} passHref>
                                <Text
                                    cursor="pointer"
                                    color={isActive(item.path) ? "#F49953" : "#667085"}
                                    _hover={{ color: "#F49953" }}
                                    fontWeight={isActive(item.path) ? "bold" : "normal"}
                                >
                                    {item.name}
                                </Text>
                            </NextLink>
                        );
                    })}
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
                    >
                        <DrawerCloseButton color="#667085" />
                        <DrawerHeader borderBottomWidth="1px" px={4}>
                            <Image src="/images/nav_logo.png" alt="Rischer Consulting" width={200} height={200} />
                        </DrawerHeader>

                        <DrawerBody px={4} py={6}>
                            <VStack align="stretch" spacing={6}>
                                {NAV_ITEMS.map((item) => {
                                    if (item.subItems) {
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
                                                    <Box
                                                        as="span"
                                                        display="inline-block"
                                                        transform={mobileSubMenuOpen === item.name ? 'rotate(180deg)' : 'rotate(0deg)'}
                                                        transition="transform 0.2s"
                                                    >
                                                        <ChevronDownIcon />
                                                    </Box>
                                                </Flex>
                                                {mobileSubMenuOpen === item.name && (
                                                    <VStack
                                                        align="stretch"
                                                        mt={4}
                                                        ml={4}
                                                        spacing={4}
                                                    >
                                                        {item.subItems.map((subItem) => (
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
                px={{ base: 4, lg: 32 }}
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
