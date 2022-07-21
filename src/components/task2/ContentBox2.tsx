import { useEffect, useState } from "react";
import {
  Box,
  Image,
  HStack,
  Flex,
  Icon,
  Container,
  Text,
} from "@chakra-ui/react";
import "./styles.css";

import { Article } from "../../gateways/articles.dto";
import { getArticles } from "../../gateways/articlesAdapter";
import { useData } from "../../hooks/useData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReadMoreButton } from "../../widgets/ReadMoreButton";
import { IoCopyOutline } from "react-icons/io5";

export function ContentBox2() {
  let data = useData<Article[]>(getArticles);

  const [carouselData, setCarouselData] = useState<any[] | null>(null);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  // let page = 2;
  // let limit = 20;

  // async function getNewData(page, limit): Promise<Article[]> {
  //   const response = await fetch(
  //     `http://localhost:3001/posts?_page=${page}&_limit=${limit}`
  //   );
  //   return response.json();
  // }

  useEffect(() => {
    let testData;
    async function getData() {
      testData = await getArticles(page, limit);
      console.log("testdata", testData);
      setCarouselData(testData);
    }
    getData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1025 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // dummy data to generate contentBox
  // const data = useData<Article[]>(getArticles);

  const dummyContent = data;

  // const getCarouselData = () => {
  //   for (let i = carouselPage; i < dummyContent.length; i += 3) {
  //     let temp = dummyContent.slice(i, i + 3);
  //     console.log("temp", temp);
  //     sliceData.push(temp);
  //     // res.push(temp);
  //     console.log("dummy", dummyContent);
  //   }
  //   console.log("slice", sliceData);

  //   // return res;
  // };

  return (
    <Box borderRadius="lg" mb="5">
      {/* <Flex>
        <HStack spacing="24px"> */}
      <Carousel responsive={responsive} showDots={true} draggable={true}>
        {carouselData ? (
          carouselData.map((content) => (
            <Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                overflow="hidden"
                key={content.id}
                alignItems="center"
                display="inline-block"
                mb="5"
              >
                <Box display="flex" flex-direction="column" position="relative">
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
                        fontSize="xl"
                        alignItems="center"
                        margin="2"
                      >
                        <strong>{content.createdAt}</strong>
                      </Box>
                    </Flex>
                  </Box>
                  <Image src={content.postImgSrc} />
                </Box>
                <Box
                  bg="#FFFFFF"
                  display="inline-block"
                  p="5"
                  minHeight="xs"
                  minWidth="sm"
                >
                  <Box
                    mt="0"
                    mb="4"
                    fontWeight="extrabold"
                    fontSize="xl"
                    lineHeight="tight"
                    textAlign={["left"]}
                  >
                    {content.postTitle}
                  </Box>

                  <Box
                    fontSize="lg"
                    textAlign={["left"]}
                    display="inline-block"
                    color="grey"
                  >
                    {content.postDescription}
                  </Box>

                  <Box
                    display="flex"
                    mt="6"
                    mb="3"
                    justifyContent="space-between"
                    alignItems="baseline"
                    pos="absolute"
                    bottom="10"
                  >
                    <ReadMoreButton></ReadMoreButton>
                    <Box>
                      <Box as="span" ml="2" color="grey" fontSize="md">
                        {content.authorName}
                      </Box>
                      <Box as="span" ml="2" color="grey" fontSize="md">
                        <Icon as={IoCopyOutline} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </Box>
  );
}
