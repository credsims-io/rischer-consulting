import React from 'react';
import { Box, SimpleGrid, Image } from '@chakra-ui/react';

export default function ClientsGrid() {
    const logos = [
        { id: 1, alt: 'Logo 1', image: "cityofrefuge.png" },
        { id: 2, alt: 'Logo 2', image: "dallas.png" },
        { id: 3, alt: 'Logo 3', image: "dart.png" },
        { id: 4, alt: 'Logo 4', image: "disciple.png" },
        { id: 5, alt: 'Logo 5', image: "ibbg.png" },
        { id: 6, alt: 'Logo 6', image: "mercy.png" },
        { id: 7, alt: 'Logo 7', image: "officialmint.png" },
        { id: 8, alt: 'Logo 8', image: "salt.png" },
    ];

    return (
        <Box maxW="1200px" mx="auto" px={4}>
            <SimpleGrid
                columns={{ base: 2, md: 3, lg: 4 }}
                spacing={0}
            >
                {logos.map((logo, index) => (
                    <Box
                        key={logo.id}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={8}
                        position="relative"
                        bg="white"
                        _after={{
                            content: '""',
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            width: '1px',
                            height: '100%',
                            backgroundColor: '#D9D9D9',
                            display: ((index + 1) % 4 === 0) ? 'none' : 'block',
                            '@media (max-width: 991px)': {
                                display: ((index + 1) % 3 === 0) ? 'none' : 'block',
                            },
                            '@media (max-width: 767px)': {
                                display: ((index + 1) % 2 === 0) ? 'none' : 'block',
                            },
                        }}
                        _before={{
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            height: '1px',
                            backgroundColor: '#D9D9D9',
                            display: index >= logos.length - 4 ? 'none' : 'block',
                            '@media (max-width: 991px)': {
                                display: index >= logos.length - 3 ? 'none' : 'block',
                            },
                            '@media (max-width: 767px)': {
                                display: index >= logos.length - 2 ? 'none' : 'block',
                            },
                        }}
                        borderLeft={{
                            base: (index % 2 === 0) ? 'none' : '1px solid',
                            md: (index % 3 === 0) ? 'none' : '1px solid',
                            lg: (index % 4 === 0) ? 'none' : '1px solid',
                        }}
                        borderLeftColor="#D9D9D9"
                        borderTop={{
                            base: index < 2 ? 'none' : '1px solid',
                            md: index < 3 ? 'none' : '1px solid',
                            lg: index < 4 ? 'none' : '1px solid',
                        }}
                        borderTopColor="#D9D9D9"
                    >
                        <Image
                            src={`/images/${logo.image}`}
                            alt={logo.alt}
                            objectFit="contain"
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};