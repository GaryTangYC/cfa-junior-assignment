import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function ReadMoreButton() {
  return (
    <Button colorScheme="pink" variant="solid">
      Read More
      <ArrowForwardIcon></ArrowForwardIcon>
    </Button>
  );
}
