import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./components/FormInputText";


interface IFormInput {
  name: string;
}

const defaultValues = {
  name: "",
};


export const FormDemo = () => {

  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, formState: { errors }, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h3">Fomulário Teste</Typography>

      <FormInputText name="name" control={control} label="Nome" />
      {errors.name && <span>Campo obrigatório</span>}

      <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
        {" "}
        Salvar{" "}
      </Button>
      <Button onClick={() => reset()} variant="contained" color="secondary">
        {" "}
        Limpar{" "}
      </Button>
    </Paper>
  );
};
