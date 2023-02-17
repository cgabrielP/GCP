import { Text } from "@chakra-ui/react";
import Link from "next/link";

const NavLinks = ({ children,  to = "/", ...rest }) => {
  return (
    <>
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </>
  );
};
export default NavLinks;
