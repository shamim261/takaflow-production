import { z } from "zod";

const cashInInput = z.object({
  number: z.string().length(11, "Enter a valid number!"),
  amount: z.string().min(1, "Minimum is 50 Taka"),
  pin: z.string().min(1, "Please enter PIN"),
});

export default cashInInput;
