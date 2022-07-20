import { Heading, Text } from "@chakra-ui/react";
import { Section } from "./Section";
import { ContentBox } from "./ContentBox";

export function Carousel(dataBackend: JSX.IntrinsicAttributes) {
  return (
    <Section>
      <Heading>Carousel</Heading>
      <ContentBox {...dataBackend}></ContentBox>
    </Section>
  );
}
