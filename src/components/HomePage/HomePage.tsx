/** @format */

import { Box, Button, Link, Stack, Typography } from "@mui/material";
import chevrons from "../../assets/chevrons-right.svg";
import codepen from "../../assets/codepen.svg";
import frame from "../../assets/Frame 26086348.svg";
import refresh from "../../assets/refresh-cw.svg";
import briefcase from "../../assets/briefcase.svg";
import sideDesign from "../../assets/side-design.svg";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [inputValue, setInputValue] = useState<string[]>([]);

  const fetchData = async () => {
    //fetch data from backend
    const message = await fetch("http://localhost:3000/data");
    const data = await message.json();
    setInputValue(data[data.length - 1].text.split(" "));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack className="min-h-screen flex flex-col items-center bg-white">
      {/* // Navgation */}
      <Box className="py-4 border-b w-full ">
        <Box className="flex justify-center items-center space-x-6 text-sm font-medium text-gray-600 gap-4">
          <Link
            href="#about"
            className="hover:text-gray-900 !no-underline !text-black">
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-gray-900 !no-underline !text-black">
            Services
          </Link>
        </Box>
      </Box>

      {/* Banner Section */}
      <Box className="flex gap-8 py-16 bg-gradient-to-b from-white to-[#FFF7EC] border-box">
        <Box>
          <img src={sideDesign} alt="design" className="min-h-96 w-30" />
        </Box>
        <Box className="space-y-6 px-4 md:px-0 flex flex-col gap-10 pt-5">
          <Typography
            variant="h3"
            className="text-1xl md:text-5xl !font-bold leading-tight">
            {inputValue.slice(0, 3).join(" ")}
            <span className="text-orange-400">
              {" "}
              {inputValue.slice(3, 6).join(" ")}
            </span>{" "}
            {inputValue.slice(6, inputValue.length).join(" ")}
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-lg">
            Powerful AI solutions that go beyond mere data sorting and
            exploration. Use our array of AI enabled solutions that understand
            your business and recommend the optimal way forward.
          </Typography>
          <Button
            className="!bg-orange-300 !hover:bg-orange-500 !text-black !rounded-md !px-2 w-32 h-11 !text-sm
            !font-bold">
            Get started
          </Button>
        </Box>
        <Box>
          <img
            src="https://s3-alpha-sig.figma.com/img/c257/a959/5ce3eddd17534d8cb91a80062f10fbff?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oot31i-xV1LuH0QCPY-nFny6cD5evPVWZD1JUjWPTOO7TZg2K~mJ11RGucE79pu8totNY4QCO94O6h7GTrx5Y4zQtVuS18-WdXZ7zeF~fNh9qWHb8z7uRJ7~OpGH7HDnlqbG9BiiMcpsEWOF6fuq4KU-BFZBPrMFZijtwd-v6JgGSzRcO6r6QGxVP~Om45Tl1GFCphVEOlYROnOgpmWOX-JsK9wgTAsJO8daLb~4YpODw1~QcvguP2pDr5vvicfBR4vbrLkX5TKSzLsMuTt-FK5iKscbuvELGkJrH9jcmWffkhsVammNRs723UOOP~L~yOQejLR5vUn2hdi0LdgShQ__"
            alt="design"
            className="w-full min-h-96"
          />
        </Box>
      </Box>

      {/* Footer Section */}
      <Box className="mx-auto py-16 px-4 md:px-0 w-full ">
        <Box className="flex gap-12 mb-24 justify-evenly items-center">
          <Box className="space-y-4 flex flex-col gap-3 w-56 h-48 box-border">
            <Box className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <img src={chevrons} alt="chevrons-image" />
            </Box>
            <Typography variant="h6" className="!font-bold">
              Ready to Go Algos
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              We have ready accelerators embedded with learnings from hundreds
              of past projects, generating actionable results.
            </Typography>
          </Box>

          <Box className="space-y-4 flex flex-col gap-3 w-56 h-48 box-border">
            <Box className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <img src={codepen} alt="codpen-image" />
            </Box>
            <Typography variant="h6" className="!font-bold">
              Internal capability building
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              We productize all our work, enhance them with the latest AI
              technology, and train your internal teams to leverage them.
            </Typography>
          </Box>
        </Box>

        <Box className="flex justify-around items-center gap-8 mt-48 w-full">
          <Box className="space-y-4 flex flex-col justify-between w-56 h-48 box-border">
            <Box className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <img src={frame} alt="container-image" />
            </Box>
            <Typography variant="h6" className="text-lg !font-bold">
              Multi-source data
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              Our solutions work with old, new, or incomplete datasets, in
              different formats, and from varied sources.
            </Typography>
          </Box>

          <Box className="space-y-4 flex flex-col justify-between w-56 h-48 box-border">
            <Box className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <img src={briefcase} alt="briefcase-image" />
            </Box>
            <Typography variant="h6" className="text-lg !font-bold">
              Stakeholder alignment
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              No black boxes. Stakeholders understand the “how”, “so what” and
              “now what”, leading to clear decision-making trade offs.
            </Typography>
          </Box>

          <Box className="space-y-4 flex flex-col justify-evenly w-56 h-48 box-border">
            <Box className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <img src={refresh} alt="refresh-image" />
            </Box>
            <Typography variant="h6" className="text-lg !font-bold">
              Continuous engagement
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              We engage in the long-term to enhance, course-correct, and adopt
              new models to continuously refine your work.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomePage;
