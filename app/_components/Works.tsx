import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"
import Topbar from "./Topbar"
import BuildingBlockNav from "./BuildingBlockNav"
import Button from "./Button"
import BuildingBlockPulse from "./BuildingBlockPulse"
import Button2 from "./Button2"
import Phosphor from "./Phosphor"
import Work from "./Work"
import SectionMyStacks from "./SectionMyStacks"
import CardStacks from "./CardStacks"
import CardAnalytics from "./CardAnalytics"
import CardServices from "./CardServices"
import CardServices2 from "./CardServices2"
import CardHowItWork from "./CardHowItWork"
import FAQs from "./FAQs"
import Footer from "./Footer"
import Main2 from "./Main2"
import Framer from "./Framer"
import Text from "./Text"
import IconButton from "./IconButton"

export default function Works({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-125"]}>
        <div className={styles["div-126"]}>
          <div className={styles["div-88"]}>
            <div className={styles["div-89"]}>
              <Topbar slots={["Luqman Yusuff","Work","About","Contact","Contact me"]} />
            </div>
          </div>
          <div className={styles["div-90"]}>
            <main className={styles["main"]}>
              <div className={styles["container-9"]}>
                <div className={styles["headline-5"]}>
                  <div className={styles["div-127"]}>
                    <h1 className={styles["h1-2"]}>
                      <span className={styles["span-3"]}>{slots[0] ?? "Designing seamless experiences"}</span>
                      {" that elevate brands and engage users"}
                    </h1>
                  </div>
                </div>
                <div className={styles["div-128"]}>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-100"]}>
                      <Work slots={["https://framerusercontent.com/images/qVEfgtKv8pT3QzsKc8sf1Hbl0V4.png?scale-down-to=1024&width=8640&height=6144","SendCore","FinTech","Webapp"]} />
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-100"]}>
                      <Work slots={["https://framerusercontent.com/images/YgraTdyeY1oEWKTeSrz2KGeCzA.png?scale-down-to=1024&width=10080&height=7168","Shae.ai","A.I Product","Wellness feels futuristic"]} />
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-100"]}>
                      <Work slots={["https://framerusercontent.com/images/AjhZDWjx3JvUWuXwHCRUnkmg.png?scale-down-to=1024&width=10080&height=7168","TagoCash","Mobile Banking","Mobile App"]} />
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-100"]}>
                      <Work slots={["https://framerusercontent.com/images/E5VZPUiyY8A6sOJKCw4O8gp1B8.png?scale-down-to=1024&width=8640&height=6144","Send  → Card → Subscription","Visual Card System","Subscription Management"]} />
                    </div>
                  </div>
                  <div className={styles["div-100"]}>
                    <Work slots={["https://framerusercontent.com/images/8LAI9n1hDcMc9O9kJMwYFqRFPH8.png?scale-down-to=1024&width=14400&height=10240","TagoCash Business","Prototyping","Web App Design"]} />
                  </div>
                  <div className={styles["div-100"]}>
                    <Work slots={["https://framerusercontent.com/images/5EwwW8ZT9eHOOuGgC6INEVM.png?scale-down-to=1024&width=10080&height=7168","Drinks.ng","Mobile Application","Website and Admin Webapp"]} />
                  </div>
                  <div className={styles["div-100"]}>
                    <Work slots={["https://framerusercontent.com/images/eE1lFEOZ6vtL9USNSJ0YEl5iUs.png?scale-down-to=1024&width=10080&height=7168","VoltStack","Database Mangement","Web Design"]} />
                  </div>
                  <div className={styles["div-100"]}>
                    <Work slots={["https://framerusercontent.com/images/1e7B5RqJttqQRQNdAxDEMQsalQ.png?scale-down-to=1024&width=14400&height=10240","Weyz Mobility","Logistics","Mobile App"]} />
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-129"]} />
                  </div>
                </div>
              </div>
            </main>
            <div className={styles["div-117"]} />
          </div>
          <div className={styles["div-118"]} />
          <div className={styles["div-119"]} />
          <div className={styles["div-120"]}>
            <div className={styles["div-89"]}>
              <Footer slots={["https://framerusercontent.com/images/WjZVYjfVNTdo9UKicX5AdploJGc.webp?width=1536&height=1536","https://framerusercontent.com/images/gf0u4QlWkWyKQ0V6b90ZogjvkA.jpg?scale-down-to=1024&width=1728&height=2420","Let's have a chat,","Book a Call","Navigation","Home","Works","About","Contact","Connect","X (Twitter)","Instagram","Linkedin","©Irise Studio 2026. All rights reserved.","Framer"]} />
            </div>
          </div>
        </div>
        <Main2 slots={[]} />
      </div>
      <div className={styles["div-121"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-6"]}>
            <div className={styles["div-122"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-51"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-123"]} />
      <div className={styles["div-124"]}>
        <span className={styles["span-8"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-9"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"282\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"283\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
