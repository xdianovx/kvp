export interface iInput {
  title?: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  className?: string;
  form?: any;
  error?: any;
}
