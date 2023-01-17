import { Text } from "@chakra-ui/react";
import Link from "next/link";

const NavLinks = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <>
      <Link p href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </>
  );
};
export default NavLinks;
