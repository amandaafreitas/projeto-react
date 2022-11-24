import * as yup from "yup";

const Login = () => {
  const validacaoSchema = yup.object({
    nome: yup.string().required(),
    senha: yup.string().min(4).max(10).required(),
  });

  const valida = async (e) => {
    e.preventDefault();
    let formData = {
      nome: e.target[0].value,
      senha: e.target[1].value,
    };

    const estahValido = await validacaoSchema.isValid(formData);
    console.log(estahValido);
  };

  return (
    <>
      <form onSubmit={valida}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome"
          autoComplete="on"
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          autoComplete="on"
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default Login;
