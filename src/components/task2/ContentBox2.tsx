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

import { ReadMoreButton } from "../../widgets/ReadMoreButton";
import { IoCopyOutline } from "react-icons/io5";

import { Article } from "../../gateways/articles.dto";
import { getArticles } from "../../gateways/articlesAdapter";
import { useData } from "../../hooks/useData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps } from "react-multi-carousel/lib/types";
interface CustomLeftArrowProps extends ArrowProps {
  // myOwnStuff: string;
  onClick?: () => void;
}
interface CustomRightArrowProps extends ArrowProps {
  // myOwnStuff: string;
  // onClick: () => void;
}

export function ContentBox2() {
  const [carouselData, setCarouselData] = useState<any[] | null>(null);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(18);

  // async function getNewData(page, limit): Promise<Article[]> {
  //   const response = await fetch(
  //     `http://localhost:3001/posts?_page=${page}&_limit=${limit}`
  //   );
  //   return response.json();
  // }

  //** IF FUNCTION REACHED 2nd last tab: run getData function to load carouselData once more

  const refreshData = async () => {
    let updateLimit = limit + 18;
    console.log("limit", limit);
    setLimit(updateLimit);
    let testData = await getArticles(page, limit);
    console.log("testdata", testData);
    setCarouselData(testData);
  };

  useEffect(() => {
    let testData;
    async function getData() {
      setLimit(18);
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

  const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return <button onClick={() => onClick?.()} />;
  };

  const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return <button onClick={() => onClick?.()} />;
  };

  return (
    <Box borderRadius="lg" mb="5">
      {/* <Flex>
        <HStack spacing="24px"> */}
      <Carousel
        responsive={responsive}
        showDots={true}
        draggable={true}
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        afterChange={(previousSlide, { currentSlide }) => {
          console.log("currentslide", currentSlide);
          let current = (currentSlide += 3);
          if (currentSlide !== 0 && current % 18 === 0) {
            refreshData();
          }
        }}
      >
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
