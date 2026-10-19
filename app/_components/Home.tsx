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

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-86"]}>
        <div className={styles["div-87"]}>
          <div className={styles["div-88"]}>
            <div className={styles["div-89"]}>
              <Topbar slots={["Luqman Yusuff","Work","About","Contact","Contact me"]} />
            </div>
          </div>
          <div className={styles["div-90"]}>
            <header className={styles["hero"]}>
              <div className={styles["image-container"]}>
                <div className={styles["div-89"]}>
                  <div className={styles["img-13"]}>
                    <div className={styles["div-91"]}>
                      <img className={styles["img-14"]} src={slots[0] ?? "/images/luqman-hero.png"} alt="Portrait of Luqman Yusuff" />
                    </div>
                  </div>
                </div>
                <div className={styles["blur-2"]} />
              </div>
              <div className={styles["content-4"]}>
                <div className={styles["container-3"]}>
                  <div className={styles["headline"]}>
                    <div className={styles["tag-2"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-92"]}>
                          <BuildingBlockPulse slots={[]} />
                        </div>
                      </div>
                      <div className={styles["div-93"]}>
                        <p className={styles["p-46"]}>{slots[1] ?? "Available for Hire"}</p>
                      </div>
                    </div>
                    <div className={styles["div-89"]}>
                      <div className={styles["div-94"]}>
                        <h1 className={styles["h1"]}>
                          <span className={styles["span-3"]}>{slots[2] ?? "Hey. I’m Luqman."}</span>
                          <br className={styles["br"]} />
                          {"I design standout, user-centred products that drive measurable "}
                          <span className={styles["span-4"]}>{slots[3] ?? "Business Results"}</span>
                          <span className={styles["span-5"]}>{slots[4] ?? "."}</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className={styles["desc"]}>
                    <div className={styles["div-95"]}>
                      <p className={styles["p-47"]}>{slots[5] ?? "Product designer with 5 years in user-centered design, creating intuitive, scalable FinTech, SaaS, and EdTech experiences that solve complex problems and drive growth for B2B and B2C users."}</p>
                    </div>
                    <div className={styles["div-89"]}>
                      <div className={styles["div-96"]}>
                        <Button2 slots={["Email Me"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className={styles["works"]}>
              <div className={styles["container-4"]}>
                <div className={styles["headline-2"]}>
                  <div className={styles["div-97"]}>
                    <h2 className={styles["h2-2"]}>{slots[6] ?? "Featured works"}</h2>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-98"]}>
                      <Button slots={["All Works"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-99"]}>
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
                </div>
              </div>
            </main>
            <section className={styles["my-stacks"]}>
              <div className={styles["container-5"]}>
                <div className={styles["div-101"]}>
                  <h2 className={styles["h2-3"]}>{slots[7] ?? "My stacks"}</h2>
                </div>
                <div className={styles["div-89"]}>
                  <div className={styles["div-102"]}>
                    <SectionMyStacks slots={["https://framerusercontent.com/images/Bhdea81oiDTPBPVoo8pCk45ReM.png?width=480&height=480","Figma","A powerful design tool for creating intuitive user interfaces","https://framerusercontent.com/images/Nf63tXddU52SRtJJgRHqk7zzD2g.png?width=480&height=480","Framer","My main tool for building interactive websites","https://framerusercontent.com/images/VCZMoMHexjx0t0rw5gr0T52rnU.png?width=400&height=300","Rive","Design, animate, and code interactive vector graphics.","https://framerusercontent.com/images/xbN015pZ5m2f3mTXjZwy9lSR0L0.png?width=417&height=417","Adobe Illustrator","Illustration Design tool for creating","https://framerusercontent.com/images/Tqdz4TW3BdEmCe8MorKTAWImZlc.png?width=200&height=200","Claude","Build wireframes, user research, and test design ideas fast.","https://framerusercontent.com/images/KY4xuc61Yyo77EuDtfYkHK7BHY.png?scale-down-to=512&width=1024&height=1024","Cursor","Write code, fix bugs, and build prototypes fast."]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["social-proof"]}>
              <div className={styles["container-6"]}>
                <div className={styles["div-89"]}>
                  <div className={styles["div-103"]}>
                    <CardAnalytics slots={["10+","5+ years of experiences","12+","https://framerusercontent.com/images/gBnkhJ17BmtTHqpLjPkAeWdN8U.png?scale-down-to=1024&width=1856&height=2464","https://framerusercontent.com/images/zfmF1iFYDX2iAwx2tDdmHAHKsKY.png?scale-down-to=512&width=1024&height=1024","https://framerusercontent.com/images/7IFOWsHVY0RJFR1n6Chu0jDP1jA.png?scale-down-to=512&width=1024&height=1024","https://framerusercontent.com/images/nSJFnEeB2r1YM5Orpw7rRVinGQ.png?scale-down-to=512&width=1024&height=1024","Trusted by many"]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["services"]}>
              <div className={styles["container-7"]}>
                <div className={styles["headline-3"]}>
                  <div className={styles["div-104"]}>
                    <p className={styles["p-48"]}>{slots[8] ?? "Services"}</p>
                  </div>
                  <div className={styles["div-105"]}>
                    <h2 className={styles["h2-4"]}>
                      {"I design products with purpose, focusing beyond polished interfaces to create intuitive experiences that solve "}
                      <span className={styles["span-6"]}>{slots[9] ?? "real problems"}</span>
                      {", "}
                      <span className={styles["span-6"]}>{slots[10] ?? "improve user engagements"}</span>
                      {", "}
                      <span className={styles["span-6"]}>{slots[11] ?? "strengthen customer value"}</span>
                      {", and "}
                      <span className={styles["span-6"]}>{slots[12] ?? "deliver measurable results"}</span>
                      {"with "}
                      <span className={styles["span-6"]}>{slots[13] ?? "sustained business growth."}</span>
                    </h2>
                  </div>
                </div>
                <div className={styles["div-106"]}>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-107"]}>
                      <CardServices slots={["Interaction Design","Start a Project","A strong brand is more than just a logo—it’s the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints","https://framerusercontent.com/images/Apn3sBixkwJLg7HNCViT7Ue25Ns.png?scale-down-to=512&width=10080&height=7168","https://framerusercontent.com/images/AKA4q6jHb11tSrVRTZSJoAP7s.png?scale-down-to=512&width=10080&height=7168","https://framerusercontent.com/images/3d0xvRIE250rLSao751Uxsal0.png?scale-down-to=512&width=10080&height=7168","User flows","Micro-interactions","Prototyping","+more"]} />
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-108"]}>
                      <CardServices2 slots={["UI/UX Design","Start a Project","I create user-centred interfaces that balance strategy, usability, and visual polish. From research and wireframes to high-fidelity designs and design systems, I craft digital experiences that are simple, engaging, and built to perform.","https://framerusercontent.com/images/X72tHNlZF5IgFfWEYGjmM1odik.png?scale-down-to=512&width=10080&height=7168","https://framerusercontent.com/images/eTBjpfu8JhiZuwMY52xmCCRSUE.png?scale-down-to=512&width=10080&height=7168","https://framerusercontent.com/images/njyY7LLJRDfNw5hWUuTCE7DXF4.png?scale-down-to=512&width=10080&height=7168","Web & app design","Design system","Prototyping","+more"]} />
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-109"]}>
                      <CardServices2 slots={["Framer Development","Start a Project","I turn polished designs into responsive, interactive Framer websites that feel fast, modern, and refined. Whether it’s a landing page or full website, I build clean digital experiences optimized for performance, storytelling, and conversion.","https://framerusercontent.com/images/At4lVgdsU3vOE8OU9MxhtrSyU.png?scale-down-to=512&width=1200&height=933","https://framerusercontent.com/images/1e7B5RqJttqQRQNdAxDEMQsalQ.png?scale-down-to=512&width=14400&height=10240","https://framerusercontent.com/images/hvCupyiiVReYRKqxyxPtYoOPMU.png?scale-down-to=512&width=14400&height=10240","Landing page","Multipages","Web migration","+more"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["how-it-works"]}>
              <div className={styles["noise-2"]}>
                <div className={styles["div-110"]}>
                  <img className={styles["img-15"]} src={slots[14] ?? "https://framerusercontent.com/images/WjZVYjfVNTdo9UKicX5AdploJGc.webp?width=1536&height=1536"} alt="" />
                </div>
              </div>
              <div className={styles["containter"]}>
                <div className={styles["div-111"]}>
                  <p className={styles["p-49"]}>{slots[15] ?? "My Design Process"}</p>
                </div>
                <div className={styles["content-5"]}>
                  <div className={styles["div-112"]}>
                    <h2 className={styles["h2-5"]}>
                      {"A clear, thoughtful design process that turns ideas into impactful digital experiences. "}
                      <span className={styles["span-7"]}>{slots[16] ?? "From discovery to delivery, every step is built for clarity, collaboration, and results."}</span>
                    </h2>
                  </div>
                  <div className={styles["details-3"]}>
                    <div className={styles["book-a-call"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-113"]}>
                          <CardHowItWork slots={["1","Define the Problem","Understand the business goal, user pain points, product context, competitors, constraints, and success metrics before jumping into visuals."]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["brief"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-113"]}>
                          <CardHowItWork slots={["2","Research & Map the User Journey","Conduct user research, review analytics, study feedback, and map user flows or journey stages to identify friction, needs, and opportunities."]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["book-a-call"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-113"]}>
                          <CardHowItWork slots={["3","Ideate & Wireframe","Explore multiple solutions through sketches, low-fidelity wireframes, information architecture, and interaction flows before choosing the strongest direction"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["brief"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-113"]}>
                          <CardHowItWork slots={["4","Design & Prototype","Create high-fidelity UI, interactive prototypes, reusable components, design-system patterns, responsive layouts, and polished visual details."]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["book-a-call"]}>
                      <div className={styles["div-89"]}>
                        <div className={styles["div-113"]}>
                          <CardHowItWork slots={["5","Test, Handoff & Iterate","Validate with users, refine based on feedback and data, prepare developer-ready specs, review implementation, and keep improving after launch."]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["faqs"]}>
              <div className={styles["container-8"]}>
                <div className={styles["headline-4"]}>
                  <div className={styles["text-3"]}>
                    <div className={styles["section-title"]}>
                      <div className={styles["div-114"]}>
                        <p className={styles["p-50"]}>{slots[17] ?? "FAQs"}</p>
                      </div>
                      <div className={styles["line"]} />
                    </div>
                    <div className={styles["div-115"]}>
                      <h2 className={styles["h2-6"]}>
                        {"Clear answers on how I approach product design, collaborate with teams, and "}
                        <span className={styles["span-6"]}>{slots[18] ?? "create user-centred experiences that drive real product outcomes."}</span>
                      </h2>
                    </div>
                  </div>
                  <div className={styles["div-89"]}>
                    <div className={styles["div-96"]}>
                      <Button2 slots={["Email Me"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-89"]}>
                  <div className={styles["div-116"]}>
                    <FAQs slots={["I'm here to help you","What kind of products have you designed?","I have designed fintech products, SaaS platforms, AI-assisted experiences, dashboards, marketplaces, mobile apps, web apps, and admin tools. My work often involves complex flows, multiple user types, transaction-heavy experiences, and products that need clarity, trust, and strong usability.","How do you approach a new product problem?","How do you collaborate with PMs and engineers?","How do you measure the success of your designs?","What is your strength as a product designer?","Do you work with design systems?"]} />
                  </div>
                </div>
              </div>
            </section>
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
          <SvgGraphic className={styles["svg-9"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"691\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"692\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
