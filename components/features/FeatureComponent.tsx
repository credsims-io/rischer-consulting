"use client"

import Button from '@/components/ui/Button'
import useCustomHook from '@/lib/hooks/useCustomHook'
import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function FeatureComponent() {
    const { t } = useTranslation();
    const { count, increment, decrement } = useCustomHook()

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={4}
        >
            <h2>{t("hello")}</h2>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increase</Button>
            <Button onClick={decrement}>Decrease</Button>
        </Box>
    )
}