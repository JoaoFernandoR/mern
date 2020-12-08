import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoPerson, GoCheck } from "react-icons/go";
import { VscError } from "react-icons/vsc";

export interface FormDataType {
  name: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(5, "Mínimo de 5 caracteres"),
});

function Validation() {
  const { register, handleSubmit, errors } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
  };

  return (
    <section className="section">
      <div className="container is-flex is-justify-content-center">
        <form className="column is-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${errors.name ? "is-danger" : "is-primary"}`}
                type="text"
                placeholder="Name"
                ref={register}
                name="name"
              />
              <span className="icon is-small is-left">
                <GoPerson />
              </span>
              {errors.name ? (
                <span className="icon is-small is-right">
                  <VscError style={{ color: "#ff3860" }} />
                </span>
              ) : (
                <span className="icon is-small is-right">
                  <GoCheck style={{ color: "#00d1b2" }} />
                </span>
              )}
            </div>
            <p className="help is-danger"> {errors.name?.message}</p>
          </div>
          <div className="field">
            <div className="control">
              <input
                className={`input ${
                  errors.password ? "is-danger" : "is-primary"
                }`}
                type="password"
                placeholder="Password"
                ref={register}
                name="password"
              />
            </div>
            <p className="help is-danger"> {errors.password?.message}</p>
          </div>
          <button className="button is-success"> Enviar </button>
        </form>
      </div>
    </section>
  );
}

export default Validation;
