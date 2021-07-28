import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from "styled-system";

const ccProps = ["showFor", "asCard"];

const forwardProp = (propName: string) =>
  shouldForwardProp(propName) && !ccProps.includes(propName);

const fontFamily = `'Roboto', sans-serif`;
const fontSize = "14px";

const Base: any = styled("div", { shouldForwardProp: forwardProp })(
  {
    fontFamily,
    fontSize,
  },
  space,
  layout,
  flexbox,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

// usage <Box showFor={[1, 0]}/>
const showForProp = (dflt: string) =>
  system({
    showFor: {
      property: "display",
      transform: (val: number) => (val ? dflt : "none"),
    },
  });

// usage <Box asCard />
const asCard = (props: any) => {
  return props.asCard
    ? {
        borderRadius: 10,
        boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }
    : {};
};

export const Box: any = styled(Base)(asCard, showForProp("block"));
export const Flex: any = styled(Base)(
  { display: "flex" },
  asCard,
  showForProp("flex")
);

export const Img = styled("img", { shouldForwardProp: forwardProp })(
  space,
  layout,
  background,
  border,
  position,
  shadow
);
