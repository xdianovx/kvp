import { Button, Input } from "../../../ui";
import { Modal } from "../Modal";
import { iModal } from "../Modal.interface";
import s from "../Modal.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserApi } from "../../../utils/api";
import nookies from "nookies";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const RegisterModal = ({ isOpen, setIsOpen, className, subtitle, title }: iModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (dto: any) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      nookies.set(null, "kvptoken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title} subtitle={subtitle} className={s.loginmodal__content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input title="Введите почту" type="email" className={s.input} form={{ ...register("email") }} />
        <Input title="Введите пароль" type="password" className={s.input} form={{ ...register("password") }} />
        <div className={s.buttons}>
          <Button submit style="accent">
            Продолжить
          </Button>

          {/* <Button style="bordered">Войти с помощью соц. сетей</Button> */}
        </div>
      </form>

      {/* <p>Еще нет аккаунта? Зарегестироваться</p>

      <p>
        Нажимая кнопку «Продолжить», вы соглашаетесь с Условиями обслуживания и подтверждаете, что к вам применяется
        Политика конфиденциальности.
      </p> */}
    </Modal>
  );
};
