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
                        borderRight={{
                            base: (index + 1) % 2 !== 0 ? '1px solid #D9D9D9' : 'none',
                            md: (index + 1) % 3 !== 0 ? '1px solid #D9D9D9' : 'none',
                            lg: (index + 1) % 4 !== 0 ? '1px solid #D9D9D9' : 'none',
                        }}
                        borderBottom={{
                            base: index < logos.length - 2 ? '1px solid #D9D9D9' : 'none',
                            md: index < logos.length - 3 ? '1px solid #D9D9D9' : 'none',
                            lg: index < logos.length - 4 ? '1px solid #D9D9D9' : 'none',
                        }}
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