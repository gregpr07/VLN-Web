import { shorterText } from "@services/functions";
import { useState } from "react";
import ButtonlessRed from "./ButtonLesRed";

const ReadMore = ({
  text,
  shorterLength,
}: {
  text: string;
  shorterLength: number;
}) => {
  const [shorten, setShorten] = useState<boolean>(true);

  return (
    <>
      {shorten ? shorterText(text, shorterLength) : text}
      <ButtonlessRed className="pt-6 block" action={() => setShorten(!shorten)}>
        {shorten ? "Read More" : "Read Less"}
      </ButtonlessRed>
    </>
  );
};

export default ReadMore;
