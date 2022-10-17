import EmptyProfile from "../../assets/images/empty-profile.svg";
import CustomDropdown from "../../components/dropdown";

const UserCustomComponent = ({ name }) => {
  return (
    <div>
      <img height="24px" src={EmptyProfile} style={{ marginRight: "11.5px" }} />{" "}
      {name}
    </div>
  );
};
const RoleDropdown = ({value,}) => {
  return <CustomDropdown />
};
export { UserCustomComponent };
