import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>PORTFOLIO | {title}</title>
    </Helmet>
  );
};
