import {
  Box,
  Image,
  HStack,
  Container,
  Grid,
  Flex,
  forwardRef,
  Icon,
} from "@chakra-ui/react";

import { ReadMoreButton } from "../widgets/ReadMoreButton";
import { IoCopyOutline } from "react-icons/io5";

export function ContentBox() {
  // dummy data to generate contentBox
  const dummyContent = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Women Standing beside Corkboard",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
      date: { day: "29", month: "Oct", year: "2020" },
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/5915295/pexels-photo-5915295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Woman Looking Into A Business Paper",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
      date: { day: "29", month: "Oct", year: "2020" },
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Women Colleagues gathered inside Conference Room",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
      date: { day: "29", month: "Oct", year: "2020" },
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "People Having Business Meeting Together",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
      date: { day: "29", month: "Oct", year: "2020" },
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "PMan and Woman Discussing And Sharing Ideas",
      title: "Finance And Legal Working Streams Occur Throughout",
      details:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "ADMIN",
      replies: 3,
      date: { day: "29", month: "Oct", year: "2020" },
    },
  ];

  const getCarouselData = () => {
    const res = [];
    for (let i = 0; i < dummyContent.length; i += 3) {
      const temp = dummyContent.slice(i, i + 3);
      // res.push(temp);
    }
    // return res;
  };

  return (
    <Box>
      <Flex>
        <HStack spacing="24px">
          {dummyContent.map((content) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              key={content.id}
            >
              <Box display="flex" flex-direction="column" position="relative">
                {/* DateBox Component */}

                <Box
                  alignItems="center"
                  display="flex"
                  position="absolute"
                  bgColor="#2B3533"
                >
                  <Flex flexDirection="column" alignItems="center">
                    <Box
                      as="span"
                      color="white"
                      fontSize="md"
                      alignItems="center"
                    >
                      <strong>{content.date.day}</strong>
                    </Box>
                    <Box
                      as="span"
                      color="white"
                      fontSize="sm"
                      alignItems="center"
                    >
                      {content.date.month}
                    </Box>
                    <Box
                      as="span"
                      color="white"
                      fontSize="sm"
                      alignItems="center"
                    >
                      {content.date.year}
                    </Box>
                  </Flex>
                </Box>
                <Image src={content.imageUrl} alt={content.imageAlt} />
              </Box>
              <Box p="4">
                <Box mt="0" fontWeight="extrabold" lineHeight="tight">
                  {content.title}
                </Box>

                <Box>{content.details}</Box>

                <Box
                  display="flex"
                  mt="6"
                  mb="6"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <ReadMoreButton></ReadMoreButton>
                  <Box>
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {content.author}
                    </Box>
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      <Icon as={IoCopyOutline} />
                      {content.replies}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
