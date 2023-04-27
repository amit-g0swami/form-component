import "./styles.css";
import Joi from "joi";
import { FormOption } from "./input/FormOption";
import { Form } from "./form/Form";
import { FormInput } from "./input/FormInput";
import { DefaultButton } from "./button/Button";
import { FormTextInput } from "./input/FormInputText";

const schema = Joi.object({
  email: Joi.string()
    .email({
      tlds: { allow: ["com"] }
    })
    .required(),
  password: Joi.string().min(6).required(),
  city: Joi.string().required(),
  address: Joi.string().required()
});

const options = [
  { label: "Delhi", value: "delhi" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Goa", value: "goa" }
];

export default function App() {
  const getFormData = (data: any) => {
    console.log(data);
  };
  return (
    <Form
      className="form"
      validationSchema={schema}
      // initialValues={{
      //   email: "some@gmail.com",
      //   password: "123456",
      //   city: "mumbai",
      //   address: "some dummy address"
      // }}
      getFormData={getFormData}
    >
      <FormInput
        placeholder="abc@email.com"
        label="Email"
        labelRequired={true}
        name="email"
        width="400px"
      />
      <FormInput
        placeholder="password"
        label="Password"
        name="password"
        btn
        width="400px"
      />
      <FormOption
        name="city"
        options={options}
        width="400px"
        label="City"
        labelRequired={true}
      />
      <FormTextInput
        name="address"
        width="400px"
        label="Address"
        labelRequired={true}
        placeholder="Address"
      />
      <DefaultButton
        btnText="Click Here"
        size="small"
        color="error"
        name="login"
        variant="outlined"
        onClick={() => ""}
        value={""}
        type="submit"
      />
    </Form>
  );
}
