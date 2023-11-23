import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles";

export default function DirectoryItem({ category }) {
  const { imageUrl, title, id, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer
      key={id}
      className="directory-item-container"
      onClick={onNavigateHandler}
    >
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <DirectoryItemBody className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
}
