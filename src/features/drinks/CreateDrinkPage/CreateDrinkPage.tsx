import Typography from "../../../components/ui/Typography/Typography";
import { DrinkForm } from "./DrinkForm/DrinkForm";
import { useCreateDrink } from "./CreateDrinkPage.api";
import { Container } from "./styles";
import { convertFormDataToDrinkRawData, generateSnackProps } from "./utils";
import { DrinkFormData } from "./DrinkForm/types";
import { enqueueSnackbar } from "notistack";

export const CreateDrinkPage = () => {
  const { mutateAsync } = useCreateDrink({
    onSuccess: () => {
      enqueueSnackbar(generateSnackProps());
    },
    onError: (error) => {
      enqueueSnackbar(generateSnackProps(error));
    },
  });

  const onSubmit = async (data: DrinkFormData) => {
    // notice there is no need for try catch because i am handling it in
    // the onError/onSuccess
    const body = convertFormDataToDrinkRawData(data);
    await mutateAsync({ body });
  };

  return (
    <Container>
      <Typography
        type="heading-md"
        weight="bold"
        style={{ paddingBottom: "40px" }}
      >
        Create a drink
      </Typography>
      <DrinkForm onSubmit={onSubmit} />
    </Container>
  );
};
