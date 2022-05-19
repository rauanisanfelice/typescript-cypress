import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./components/FormInputText";

import Alert from '@mui/material/Alert';


interface IFormInput {
  name: string;
}

const defaultValues = {
  name: "",
};


export const FormDemo = () => {

  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, formState: { errors }, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => {
    alert('Ok!');
    console.log(data);
  };


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
      {errors.name &&
        <Alert id="error-name" severity="error">
          Campo obrigatório
        </Alert>
      }

      <Button name="btn-submit" onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
        {" "}
        Salvar{" "}
      </Button>
      <Button name="btn-clean" onClick={() => reset()} variant="contained" color="secondary">
        {" "}
        Limpar{" "}
      </Button>
    </Paper>
  );
};
