import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.innerBox}>
          <div className={styles.boxContent}>
            <h1 className={styles.headingH1}>
              Become a Financial Advisor and
              <span> Earn Rs. 1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <div>
              <Image
                className={styles.googleplay}
                src="googleplay.svg"
                height="48"
                width="162"
                alt="googleplay"
              ></Image>
            </div>
          </div>
          <div className={styles.boxBanner}>
            <Image
              className={styles.boxImage}
              src="/manphone.webp"
              width="738"
              height="350"
              alt="manphone"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.brands}>
        <div className={styles.hello}>
          <div className={styles.brandHead}>
            <p>Top Brands on ZET</p>
            <p>We are trusted by the best brand in the company</p>
          </div>
          <div className={styles.brandNames}>
            <div className={styles.logos}>
                <img className={styles.brandImg} src="amex.webp" alt="amex" />

                <img className={styles.brandImg} src="Aufin.webp" alt="aufin" />

                <img className={styles.brandImg} src="Bajaj.webp" alt="bajaj" />

                <img className={styles.brandImg} src="BOB.webp" alt="bob" />

                <img className={styles.brandImg} src="YesBank.webp" alt="YesBank" />

                <img className={styles.brandImg} src="StandardChartered.webp" alt="StandardChartered" />

                <img className={styles.brandImg} src="Idfc.webp" alt="idfc" />

                <img className={styles.brandImg} src="IndusInd.webp" alt="indusInd" />
            </div>
            <div className={styles.logos}>
                <img className={styles.brandImg} src="amex.webp" alt="amex" />

                <img className={styles.brandImg} src="Aufin.webp" alt="aufin" />

                <img className={styles.brandImg} src="Bajaj.webp" alt="bajaj" />

                <img className={styles.brandImg} src="BOB.webp" alt="bob" />

                <img className={styles.brandImg} src="YesBank.webp" alt="YesBank" />

                <img className={styles.brandImg} src="StandardChartered.webp" alt="StandardChartered" />

                <img className={styles.brandImg} src="Idfc.webp" alt="idfc" />

                <img className={styles.brandImg} src="IndusInd.webp" alt="indusInd" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productsOnZet}>
        <div>
          <div className={styles.brandHead}>
              <p> Products on ZET</p>
              <p>We are trusted by best brand in the country</p>
          </div>
          <div className={styles.cardContainer}>
            <Card bgColor="#edffec" productImg="CC.webp" heading="CREDIT CARDS" description="100% Contactless Application Process with Instant Approval From Top Banks." />
            <Card bgColor="#fff1ca" productImg="Loan.webp" heading="LOANS" description="100% online process. Instant offers. Affordable Rate of Interest on loans." />
            <Card bgColor="#ffeee7" productImg="BNPL.webp" heading="BUY NOW PAY LATER" description="Short-term financing that allows consumers to make purchases and pay for them over time." />
            <Card bgColor="#fff5e7" productImg="AccountSave.webp" heading="SAVING ACCOUNTS" description="ZET offers range of savings account that suits your personal needs for the banking." />
          </div>
        </div>
      </div>
    </main>
  );
}
