import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../ui";
import { UserApi } from "../../../utils/api";
import { Modal } from "../Modal";
import { iModal } from "../Modal.interface";
import s from "../Modal.module.scss";
import nookies from "nookies";
import * as yup from "yup";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserData } from "../../../redux/slices/user";

export const LoginModal = ({ isOpen, setIsOpen, className, subtitle, title }: iModal) => {
  const dispatch = useAppDispatch();
  const [formErr, setFormErr] = useState("");
  const schema = yup
    .object({
      email: yup.string().email("Введите email").required("Поле обязательно для заполнения"),
      password: yup.string().required("Введите пароль"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (dto: any) => {
    try {
      const data = await UserApi.login(dto);
      nookies.set(null, "kvptoken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      console.log(data);
      dispatch(setUserData(data));
      setIsOpen(false);
    } catch (error: any) {
      if (error.responce) setFormErr(error?.response?.data.message);
    }
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title} subtitle={subtitle} className={s.loginmodal__content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          title="Введите почту"
          type="email"
          error={errors.email?.message || formErr}
          className={s.input}
          form={{ ...register("email") }}
        />

        <Input
          title="Введите пароль"
          type="password"
          error={errors.password?.message || formErr}
          className={s.input}
          form={{ ...register("password") }}
        />
        <div className={s.buttons}>
          <Button submit style="accent">
            Продолжить
          </Button>
          {/* <Button style="bordered">Войти с помощью соц. сетей</Button> */}
        </div>
        {formErr && <p>{formErr}</p>}
      </form>

      <p>Еще нет аккаунта? Зарегестироваться</p>

      <p>
        Нажимая кнопку «Продолжить», вы соглашаетесь с Условиями обслуживания и подтверждаете, что к вам применяется
        Политика конфиденциальности.
      </p>
    </Modal>
  );
};
