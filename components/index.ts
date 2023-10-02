import dynamic from "next/dynamic";

import Form from "./Form";
import Button from "./Button";

const UsersTable = dynamic(() => import("./UsersTable"), {
  ssr: false,
});

export { Form, Button, UsersTable };
