import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSeletedPage: (value: SelectedPage) => void;
}

const Links = ({page, selectedPage, setSeletedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
   <AnchorLink
   className= { `${selectedPage === lowerCasePage ? "text-primary-500": ""}
    transtion duration-500 hover: text-primary-300
   `}
   href={`#${lowerCasePage}`}
   onClick={ () => setSeletedPage(lowerCasePage)}>
        {page}
   </AnchorLink>
  )
}

export default Links