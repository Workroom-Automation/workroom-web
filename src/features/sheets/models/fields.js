import LeftArrowIcon from "remixicon-react/ArrowLeftSLineIcon";
import BillLineIcon from "remixicon-react/BillLineIcon";
import PencilLineIcon from "remixicon-react/PencilRuler2LineIcon";
import LayoutTopIcon from "remixicon-react/LayoutTopLineIcon";
import FlashLightIcon from "remixicon-react/FlashlightLineIcon";
import TextIcon from "remixicon-react/TextSpacingIcon";
import HashTagIcon from "remixicon-react/HashtagIcon";
import ChecklistIcon from "remixicon-react/CheckboxCircleLineIcon";
import SingleCheckIcon from "remixicon-react/CheckLineIcon";
import DoubleCheckIcon from "remixicon-react/CheckDoubleLineIcon";
import CalenderIcon from "remixicon-react/CalendarLineIcon";
import UserIcon from "remixicon-react/User3LineIcon";
import UserGroupIcon from "remixicon-react/GroupLineIcon";
import ImageAddIcon from "remixicon-react/ImageAddLineIcon";
import FileAddIcon from "remixicon-react/FileAddLineIcon";
import AddLinkIcon from "remixicon-react/LinkMIcon";
import SectionIcon from "remixicon-react/LayoutRowLineIcon";

export const fields = {
  ["Basic Fields"]: [
    {
      name: "Text",
      icon: <TextIcon color="#7D7676" />,
    },
    { name: "Number", icon: <HashTagIcon color="#7D7676" /> },
  ],
  ["Selection Fields"]: [
    {
      name: "Checklist",
      icon: <ChecklistIcon color="#7D7676" />,
    },
    {
      name: "Single Selection",
      icon: <SingleCheckIcon color="#7D7676" />,
    },
    {
      name: "Multi-Selection",
      icon: <DoubleCheckIcon color="#7D7676" />,
    },
    {
      name: "Select Date & Time",
      icon: <CalenderIcon color="#7D7676" />,
    },
    {
      name: "User Selection",
      icon: <UserIcon color="#7D7676" />,
    },
    {
      name: "Multi-User Selection",
      icon: <UserGroupIcon color="#7D7676" />,
    },
  ],
  ["Attachment Fields"]: [
    { name: "Upload Photo/Video", icon: <ImageAddIcon color="#7D7676" /> },
    {
      name: "Upload File",
      icon: <FileAddIcon color="#7D7676" />,
    },
    {
      name: "Add Link",
      icon: <AddLinkIcon color="#7D7676" />,
    },
  ],
  ["Layout"]: [{ name: "Section", icon: <SectionIcon color="#7D7676" /> }],
};
