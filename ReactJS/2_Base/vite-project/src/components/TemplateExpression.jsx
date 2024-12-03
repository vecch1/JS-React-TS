// Tempçate Expreesion - tudo em chaves é js

const TemplateExpression = () => {
    const name = "Lucas";

    const data = {
        age:18,
        job:"programador"
    }
  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e seu trabalho é {data.job}</p>
    </div>
  )
}

export default TemplateExpression