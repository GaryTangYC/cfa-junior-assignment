import { useState } from "react";
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
// import { getArticles } from "../gateways/articlesAdapter";
// import type { Article } from "../gateways/articles.dto";
// import { useData } from "../hooks/useData";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import * as React from "react";
// import Carousel from "framer-motion-carousel";

// import Carousel from "react-grid-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReadMoreButton } from "../widgets/ReadMoreButton";
import { IoCopyOutline } from "react-icons/io5";

export function ContentBox() {
  const [carouselPage, setCarouselPage] = useState(0);

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
    {
      id: 6,
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
  ];

  type dataArray = {
    id: number;
    imageUrl: string;
    imageAlt: string;
    title: string;
    details: string;
    author: string;
    replies: number;
    date: {
      day: string;
      month: string;
      year: string;
    };
  };

  let sliceData: any[] = [];

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
  // getCarouselData();

  return (
    <Box borderRadius="lg" mb="5">
      {/* <Flex>
        <HStack spacing="24px"> */}
      <Carousel responsive={responsive} showDots={true} draggable={true}>
        {dummyContent.map((content) => (
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
                      fontSize="xl"
                      alignItems="center"
                      margin="2"
                    >
                      <strong>{content.date.day}</strong>
                    </Box>
                    <Box
                      as="span"
                      color="white"
                      fontSize="md"
                      alignItems="center"
                    >
                      {content.date.month}
                    </Box>
                    <Box
                      as="span"
                      color="white"
                      fontSize="md"
                      alignItems="center"
                      margin="1"
                      mb="3"
                    >
                      {content.date.year}
                    </Box>
                  </Flex>
                </Box>
                <Image src={content.imageUrl} alt={content.imageAlt} />
              </Box>
              <Box bg="#FFFFFF" display="inline-block" p="5">
                <Box
                  mt="0"
                  mb="4"
                  fontWeight="extrabold"
                  fontSize="xl"
                  lineHeight="tight"
                  textAlign={["left"]}
                >
                  {content.title}
                </Box>

                <Box
                  fontSize="lg"
                  textAlign={["left"]}
                  display="inline-block"
                  color="grey"
                >
                  {content.details}
                </Box>

                <Box
                  display="flex"
                  mt="6"
                  mb="3"
                  justifyContent="space-between"
                  alignItems="baseline"
                >
                  <ReadMoreButton></ReadMoreButton>
                  <Box>
                    <Box as="span" ml="2" color="grey" fontSize="md">
                      {content.author}
                    </Box>
                    <Box as="span" ml="2" color="grey" fontSize="md">
                      <Icon as={IoCopyOutline} />
                      {content.replies}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
      {/* </HStack>
      </Flex> */}
    </Box>
  );
}
