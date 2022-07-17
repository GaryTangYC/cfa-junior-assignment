import { Box, Image, Stack, Container, Grid } from "@chakra-ui/react";

import { ReadMoreButton } from "../widgets/ReadMoreButton";

// Sample card from Airbnb

export function ContentBox() {
  const dummyContent = [
    {
      id: 1,
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
    },
    {
      id: 2,
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
    },
  ];

  return (
    <Box>
      <Container maxW="container.sm" mt={10}>
        <Grid templateColumns="repeat (3,1fr)">
          {dummyContent.map((content) => (
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
              <Image src={content.imageUrl} alt={content.imageAlt} />

              <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {content.title}
                </Box>

                <Box>
                  {content.details}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {/* {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < content.rating ? "teal.500" : "gray.300"}
                  />
                ))} */}
                  <ReadMoreButton></ReadMoreButton>
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {content.author}
                  </Box>
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {content.replies} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
