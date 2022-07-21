import { getArticles } from "./gateways/articlesAdapter";
import type { Article } from "./gateways/articles.dto";
import { Carousel } from "./components/Carousel";
import { useData } from "./hooks/useData";
import { Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import { CodePanel } from "./components/Code";
import { Section } from "./components/Section";
import { Task2 } from "./components/task2/Task2";

function App() {
  const data = useData<Article[]>(getArticles);
  console.log(data);
  return (
    <>
      <Container>
        <Center>
          <Image src="watchtowr.png" />
        </Center>
      </Container>
      <Carousel />
      <Section>
        <Heading>Data</Heading>
        <Task2></Task2>
        {data ? (
          <CodePanel>{JSON.stringify(data, null, 2)}</CodePanel>
        ) : (
          <Text>This should be null if you're on task 1!</Text>
        )}
      </Section>
    </>
  );
}

export default App;
