import { useRouter } from "next/dist/client/router";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../styles/sendOuc/SendOucForm.module.css";
import ModeChanger from "../shared/modeChanger/ModeChanger";
import { ModeType } from "../shared/modeChanger/ModeChangerType";

interface SendOucFormProps {
  address: string;
}

interface FormValues {
  recipient: string;
  amount: number;
  message?: string;
}

const SendOucForm: FC<SendOucFormProps> = ({ address }) => {
  const [mode, setMode] = useState<ModeType>({ ouc: "OUC", usd: null });

  const { ouc, usd } = mode;

  const [balance, setBalance] = useState(75.6);


  const changeToOUC = () => {
    setMode({ ouc: "OUC", usd: null })
    
    const label: any = document.getElementById("amount")
    if (label) {
      label.value = label.value / 0.001;
    }

    const newBalance = balance / 0.001;
    setBalance(newBalance);
  }

  const changeToUSD = () => {
    setMode({ ouc: null, usd: "$" })
    
    const label: any = document.getElementById("amount")
    if (label) {
      label.value = label.value * 0.001;
    }

    const newBalance = balance * 0.001;
    setBalance(newBalance);
  }
  

  const renderMode = () => {
    
    if (usd === "$" && ouc === null) {
      return <label htmlFor="amount" className={styles.staticValueUSD}>$</label> 
    }
    return <label htmlFor="amount" className={styles.staticValueOUC}>OUC</label>
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
  const router = useRouter();
  const nextHref = "/send-ouc/success"
  
  const submitForm = (data: FormValues) => {
    if (usd === "$") {
      data.amount = data.amount / 0.001;
    }
    // send data and make and object
    console.log(data);

    router.push(nextHref);
  }

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
          <div
            className={[styles.recipientContainer, styles.inputContainer].join(
              " "
            )}
          >
            <label htmlFor="recipient">Recipient</label>
            <input {...register("recipient", { required: "This field is required" })} id="recipient" type="text" />
            {errors.recipient && <p className={styles.errorMessage} >{errors.recipient.message}</p>}
          </div>

          <div className={[styles.balanceContainer].join(" ")}>
            <div>
              <span className={styles.balanceSection}>Your Balance:</span>{" "}
              <span className={styles.valueSection}>{usd}{balance} {ouc}</span>
            </div>
            <div className={styles.modeChangerWrapper}>
              <ModeChanger ouc={ouc} usd={usd} changeToOUC={changeToOUC} changeToUSD={changeToUSD} />
            </div>
          </div>
          <div className={[styles.amountContainer, styles.inputContainer].join(" " )}>
            <label htmlFor="amount">Amount</label>
            <input {...register("amount", { required: "This field is required", valueAsNumber: true, max: { value: balance, message: "Your have inefficient funds" } })} id="amount" type="number" step="any" className={styles.inputUSDMode} />
            {renderMode()}
            {errors.amount && <p className={styles.errorMessage} >{errors.amount.message}</p>}

          </div>

          <div className={[styles.messageContainer, styles.inputContainer].join(" ")}>
            <label htmlFor="message">Message</label>
            <textarea {...register("message", { maxLength: { value: 256, message: "You have exceeded the character limit" } })} id="message"></textarea>
            {errors.message && <p className={styles.errorMessage} >{errors.message.message}</p>}
          </div>

          <input className={styles.submitButton} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default SendOucForm;
