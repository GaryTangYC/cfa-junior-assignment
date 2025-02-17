import { useEffect, useState } from "react";
import { Box, Image, Flex, Icon, Spinner } from "@chakra-ui/react";
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
  const [waitLoading, setWaitLoading] = useState<boolean>(false);

  const refreshData = async () => {
    setWaitLoading(true);
    let updateLimit = limit + 18;
    console.log("limit", limit);
    setLimit(updateLimit);
    console.log("limitafter", limit);
    let testData = await getArticles(page, limit);
    console.log("testdata", testData);
    setCarouselData(testData);
    setWaitLoading(false);
  };

  useEffect(() => {
    let testData;
    async function getData() {
      testData = await getArticles(page, limit);
      console.log("testdata", testData);
      setCarouselData(testData);
    }
    getData();
  }, [limit]);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1025 },
      items: 3, // set number of contentBox in view
      slidesToSlide: 3, // Set number of slides that move per click
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return <button onClick={() => onClick?.()} />;
  };

  const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return <button onClick={() => onClick?.()} />;
  };

  if (waitLoading) {
    return (
      <Box borderRadius="lg" mb="5">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </Box>
    );
  }
  return (
    <Box borderRadius="lg" mb="5">
      {/* <Flex>
        <HStack spacing="24px"> */}
      <Carousel
        responsive={responsive}
        showDots={true}
        draggable={true}
        afterChange={(previousSlide, { currentSlide }) => {
          console.log("currentslide", currentSlide);
          let current = (currentSlide += 3);
          console.log("current", current);
          console.log("limit", limit);
          if (
            (currentSlide !== 0 && current === limit - 3) ||
            currentSlide === limit
          ) {
            console.log("this runs");
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
