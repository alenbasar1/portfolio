type Props = {
  children: React.ReactNode;
  [key: string]: any;
};

const MenuItemsLayout = ({ children, ...props }: Props) => {
  return <div className="text-white inline-flex">{children}</div>;
};

export default MenuItemsLayout;
