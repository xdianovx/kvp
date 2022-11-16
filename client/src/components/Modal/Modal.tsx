import ReactModal from "react-modal";
import { iModal } from "./Modal.interface";
import cn from "classnames";
import s from "./Modal.module.scss";
import CloseSvg from "./close.svg";

export const Modal = ({ isOpen, setIsOpen, className, title, children, subtitle }: iModal) => {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      contentLabel="onRequestClose Example"
      onRequestClose={setIsOpen}
    >
      <div className={cn(s.modal__content, className)}>
        <div className={s.modal__head}>
          <p className={s.title}>{title}</p>
          {subtitle && <p className={s.subtitle}>{subtitle}</p>}
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className={s.modal__close}
          >
            <CloseSvg />
          </div>
        </div>
        <div className={s.modal__body}>{children}</div>
      </div>
    </ReactModal>
  );
};
