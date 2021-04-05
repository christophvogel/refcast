import { Meta } from "@storybook/react/types-6-0";
import ReferenceList from "./ReferenceList";

export default {
  title: "Common/Reference List",
} as Meta;

export const References = () => (
  <ReferenceList refTopic="Lorem ipsum" timeCode="04:34" />
);
