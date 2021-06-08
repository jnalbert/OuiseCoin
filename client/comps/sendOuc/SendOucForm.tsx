import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../styles/sendOuc/SendOucForm.module.css";
import ModeChanger from "../shared/ModeChanger";

interface SendOucFormProps {
  address: string;
}

interface ModeType {
  ouc: "OUC" | null;
  usd: "$" | null;
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
    
    const label = document.getElementById("amount")
    if (label) {
      label.value = label.value / 0.001;
    }

    const newBalance = balance / 0.001;
    setBalance(newBalance);
  }

  const changeToUSD = () => {
    setMode({ ouc: null, usd: "$" })
    
    const label = document.getElementById("amount")
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

  const { register, handleSubmit } = useForm<FormValues>()
  
  const submitForm = (data: FormValues) => {
    console.log(data);
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
            <input {...register("recipient")} id="recipient" type="text" />
          </div>

          <div className={[styles.balanceContainer].join(" ")}>
            <div>
              <span className={styles.balanceSection}>Balance</span>{" "}
              <span className={styles.valueSection}>{usd}{balance} {ouc}</span>
            </div>
            <div className={styles.modeChangerWrapper}>
              <ModeChanger ouc={ouc} usd={usd} changeToOUC={changeToOUC} changeToUSD={changeToUSD} />
            </div>
          </div>
          <div className={[styles.amountContainer, styles.inputContainer].join(" " )}>
            <label htmlFor="amount">Amount</label>
            <input {...register("amount")} id="amount" type="number" className={styles.inputUSDMode}/>
            {renderMode()}

          </div>

          <div className={[styles.messageContainer, styles.inputContainer].join(" ")}>
            <label htmlFor="message">Message</label>
            <textarea {...register("message")} id="message"></textarea>
          </div>

          <input className={styles.submitButton} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default SendOucForm;
