interface OrderFormProps{
    onSubmit: (value: string) => void;
}
export default function OrderForm({ onSubmit }: OrderFormProps) {
    const handeleSubmit = (formData: FormData) => {
        const username = formData.get("username") as string;
        onSubmit(username)
    };
  return (
      <form action={handeleSubmit}>
          <input type="text" name="username" />
          <button type="submit">Place order</button>
    </form>
  );
}