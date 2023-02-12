import { menuItems } from "../../constants/menuItems";
import MenuItemsLayout from "../layout/MenuItemsLayout";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <MenuItemsLayout>
      <ul>
        {menuItems.map(({ url, title, id }) => (
          <MenuItem url={url} title={title} id={id} />
        ))}
      </ul>
    </MenuItemsLayout>
  );
};
export default MenuItems;
