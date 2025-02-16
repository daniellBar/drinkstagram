import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { drinkSchema, ingredientsInfoText } from "./consts";
import { CloudinaryUpload } from "../../../../components/CloudinaryUpload/CloudinaryUpload";
import { ControlledInput } from "../../../../components/ui/Input/Input";
import { Button } from "../../../../components/ui/Button/Button";
import { Form } from "./styles";
import { DrinkFormData } from "./types";

interface DrinkFormProps {
  onSubmit: (data: DrinkFormData) => void;
}

export const DrinkForm = ({ onSubmit }: DrinkFormProps) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<DrinkFormData>({
    resolver: zodResolver(drinkSchema),
    defaultValues: {
      name: "",
      instructions: "",
      imgUrl: "",
    },
    mode: "onSubmit",
  });

  const handleImageUpload = (url: string) => {
    setImgUrl(url);
    setValue("imgUrl", url);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        control={control}
        name="name"
        label="Name"
        fullWidth={true}
        required={true}
      />

      <ControlledInput
        control={control}
        name="instructions"
        label="Instructions"
        fullWidth={true}
        multiline={true}
        rows={3}
        required={true}
      />

      <ControlledInput
        control={control}
        name="ingredients"
        label="Ingredients"
        fullWidth={true}
        multiline={true}
        rows={3}
        info={ingredientsInfoText}
      />

      <CloudinaryUpload
        onUpload={handleImageUpload}
        setLoading={setIsLoadingImg}
        isLoading={isLoadingImg}
      />

      {imgUrl && (
        <div>
          <img src={imgUrl} alt="Uploaded Image" width="200" />
        </div>
      )}

      <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
        <Button disabled={isLoadingImg} loading={isSubmitting} size="xl">
          Submit
        </Button>
      </div>
    </Form>
  );
};
