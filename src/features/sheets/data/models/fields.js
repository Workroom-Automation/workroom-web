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
      id: "TEXT",
      name: "Text",
      icon: <TextIcon color="#7D7676" />,
    },
    {
      id: "NUMBER",
      name: "Number",
      icon: <HashTagIcon color="#7D7676" />,
    },
  ],
  ["Selection Fields"]: [
    {
      id: "",
      name: "Checklist",
      icon: <ChecklistIcon color="#7D7676" />,
    },
    {
      id: "SELECTION",
      name: "Single Selection",
      icon: <SingleCheckIcon color="#7D7676" />,
    },
    {
      id: "MULTI_SELECTION",
      name: "Multi-Selection",
      icon: <DoubleCheckIcon color="#7D7676" />,
    },
    {
      id: "DATE_SELECTION",
      name: "Select Date & Time",
      icon: <CalenderIcon color="#7D7676" />,
    },
    {
      id: "",
      name: "User Selection",
      icon: <UserIcon color="#7D7676" />,
    },
    {
      id: "",
      name: "Multi-User Selection",
      icon: <UserGroupIcon color="#7D7676" />,
    },
  ],
  ["Attachment Fields"]: [
    {
      id: "",
      name: "Upload Photo/Video",
      icon: <ImageAddIcon color="#7D7676" />,
    },
    {
      id: "",
      name: "Upload File",
      icon: <FileAddIcon color="#7D7676" />,
    },
    {
      id: "",
      name: "Add Link",
      icon: <AddLinkIcon color="#7D7676" />,
    },
  ],
  ["Layout"]: [
    {
      id: "",
      name: "Section",
      icon: <SectionIcon color="#7D7676" />,
    },
  ],
};
