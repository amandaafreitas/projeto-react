import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validacaoSchema = yup.object({
  nome: yup.string().required("O campo nome não pode ser vazio"),
  senha: yup
    .string()
    .min(4, "A senha deve ter no mínimo 4 caracteres")
    .max(10, "A senha deve ter no máximo 10 caracteres")
    .required("O campo senha não pode ser vazio"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoSchema), //connecting yup with react-hook-form
  });

  const valida = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(valida)}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome"
          {...register("nome")}
        />
        <p>{errors.nome?.message}</p>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          {...register("senha")}
        />
        <p>{errors.senha?.message}</p>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default Login;
