import React from "react";
import FormInput from "../form/FormInput";
import Checkbox from "../form/Checkbox";
import ButtonText from "./../../components/button/ButtonText";
import Select from "../form/Select";

const ContactForm = () => {
  return (
    <div className="form">
      <div className="form-header">
        <h2>Stay in the Know!</h2>
        <div>
          <p>Don't get left behind! </p>
          <p>Subscribe to our newsletters today!</p>
        </div>
      </div>
      <div className="form-contact">
        <FormInput
          type={"text"}
          placeholder={"Name"}
          className={"input-contact"}
        />
        <FormInput
          type={"email"}
          placeholder={"Email"}
          className={"input-contact"}
        />
        <Select
          name={"country"}
          className={"input-contact"}
          listOption={[
            {
              lable: "Contry",
              value: "contry",
            },
          ]}
        />
        <Select
          name={"Platform"}
          className={"input-contact"}
          listOption={[
            {
              lable: "Platform",
              value: "Platform",
            },
          ]}
        />
        <Checkbox
          id={"confirm"}
          name="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.
        "
          value={true}
        />
        <Checkbox
          id={"degree"}
          name="I agree to receive promotional offers relating to all Gameloft games and services.
        "
          value={true}
        />
        <div className="btn-submit">
          <ButtonText nameButton={"Button"} className={"btn-form"} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
