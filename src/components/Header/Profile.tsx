import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text>Diogo Miranda</Text>
                    <Text color="gray.300" fontSize="small">diogodminfor@gmail.com</Text>
                </Box>
            }
            <Avatar size="md" name="Diogo Miranda" src="https://avatars.githubusercontent.com/u/29265016?s=60&v=4" ></Avatar>
        </Flex>
    )
}